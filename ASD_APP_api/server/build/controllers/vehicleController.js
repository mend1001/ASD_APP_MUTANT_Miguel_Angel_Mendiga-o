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
class VehicleController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicle = yield database_1.default.query('SELECT * FROM asd_prueba.t_vehiculo AS veh ORDER BY veh.vehid ASC ');
                res.json(vehicle);
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
                const { vehid } = req.params;
                const vehicle = yield database_1.default.query('SELECT * FROM  asd_prueba.t_vehiculo AS veh WHERE veh.vehid = ? ', [vehid]);
                console.log(vehicle.length);
                if (vehicle.length > 0) {
                    return res.json(vehicle[0]);
                }
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO asd_prueba.t_vehiculo SET ?', [req.body]);
                const { vehnom } = req.body;
                if (vehnom == "") {
                    res.status(400).json({ message: "Bad Request. Please fill all field." });
                }
                res.json({ message: 'vehicle Saved' });
            }
            catch (e) {
                (res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { vehid } = req.params;
                const oldVehicle = req.body;
                yield database_1.default.query('UPDATE asd_prueba.t_vehiculo SET ? WHERE vehid = ?', [req.body, vehid]);
                res.json({ message: "The vehicle was Updated" });
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
                const { vehid } = req.params;
                yield database_1.default.query("UPDATE asd_prueba.t_vehiculo SET t_vehiculo.vehactivo = '0' WHERE vehid = ?", [vehid]);
                res.json({ message: "The vehicle was deleted" });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    saved(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { vehid } = req.params;
                yield database_1.default.query("UPDATE asd_prueba.t_vehiculo SET t_vehiculo.vehactivo = '1' WHERE vehid = ?", [vehid]);
                res.json({ message: "The vehicle was fixed" });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
}
const vehicleController = new VehicleController;
exports.default = vehicleController;
