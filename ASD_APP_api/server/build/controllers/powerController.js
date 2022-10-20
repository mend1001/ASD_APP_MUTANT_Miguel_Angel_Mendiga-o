"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const error_handle_1 = require("../utils/error.handle");
class PowerController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const power = yield database_1.default.query('SELECT *  FROM  asd_prueba.t_poder AS pod');
                res.json(power);
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { podid } = req.params;
                const power = yield database_1.default.query('SELECT *  FROM  asd_prueba.t_poder AS pod  WHERE pod.podid = ?   GROUP BY pod.podid', [podid]);
                console.log(power.length);
                if (power.length > 0) {
                    res.status(500).json({ text: "Please fill current field" });
                    return res.json(power[0]);
                }
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    createPowerMutant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO asd_prueba.t_poder_mutante SET ?', [req.body]);
                const { podid, mutid } = req.body;
                if (podid == "" || mutid == "") {
                    res.status(400).json({ message: "Bad Request. Please fill all field." });
                }
                res.json({ message: 'Power Saved' });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { podid } = req.params;
                const oldPower = req.body;
                yield database_1.default.query('UPDATE asd_prueba.t_poder SET ? WHERE podid = ?', [req.body, podid]);
                res.json({ message: "The power was Updated" });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mutid } = req.params;
                yield database_1.default.query("DELETE FROM asd_prueba.t_poder_mutante WHERE mutid = ?", [mutid]);
                res.json({ message: "The powers was deleted" });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
}
const powerController = new PowerController;
exports.default = powerController;
