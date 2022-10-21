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
class MutantController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mutant = yield database_1.default.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  asd_prueba.t_mutantes AS mut  LEFT JOIN asd_prueba.t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN asd_prueba.t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN asd_prueba.t_condicion AS con ON mut.conid = con.conid  LEFT JOIN asd_prueba.t_pais AS pai ON mut.paiid = pai.paiid  left join  asd_prueba.t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join asd_prueba.t_poder AS pod ON pmu.podid = pod.podid GROUP BY mut.mutid ORDER BY mut.mutid ASC ');
                res.json(mutant);
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
                const { mutid } = req.params;
                const mutant = yield database_1.default.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  asd_prueba.t_mutantes AS mut  LEFT JOIN asd_prueba.t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN asd_prueba.t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN asd_prueba.t_condicion AS con ON mut.conid = con.conid  LEFT JOIN asd_prueba.t_pais AS pai ON mut.paiid = pai.paiid  left join  asd_prueba.t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join asd_prueba.t_poder AS pod ON pmu.podid = pod.podid  WHERE mut.mutid = ?   GROUP BY mut.mutid ', [mutid]);
                console.log(mutant.length);
                if (mutant.length > 0) {
                    
                    return res.json(mutant[0]);
                }
                
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO asd_prueba.t_mutantes SET ?', [req.body]);
                const { mutnom, mutapodo, mutactivo, paiid } = req.body;
                if (mutnom == "" || mutapodo == "" || mutactivo == "" || paiid == "") {
                    
                    res.status(400).json({ message: "Bad Request. Please fill all field." });
                }
                res.json({ message: 'Mutant Saved' });
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
                (res, 'ERROR_FIND_ITEMS');
            }
            
        }
        );
        
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mutid } = req.params;
                const oldMutant = req.body;
                yield database_1.default.query('UPDATE asd_prueba.t_mutantes SET ? WHERE mutid = ?', [req.body, mutid]);
                res.json({ message: "The mutant was Updated" });
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
                yield database_1.default.query("UPDATE asd_prueba.t_mutantes SET t_mutantes.mutactivo = '0' WHERE mutid = ?", [mutid]);
                res.json({ message: "The mutant was deleted" });
            }
            catch (e) {
                res.status(500).json({ text: "Please fill current field" });
                (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
    survived(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mutid } = req.params;
                yield database_1.default.query("UPDATE asd_prueba.t_mutantes SET t_mutantes.mutactivo = '1' WHERE mutid = ?", [mutid]);
                res.json({ message: "The mutant was deleted" });
            }
            catch (e) {
                
                res.status(500).json({ text: "Please fill current field" });
                res.status(0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
            }
        });
    }
}
const mutantController = new MutantController;
exports.default = mutantController;
