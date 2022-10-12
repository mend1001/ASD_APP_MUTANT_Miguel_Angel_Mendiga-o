"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleController_1 = __importDefault(require("../controllers/vehicleController"));
class VehicleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vehicleController_1.default.list);
        this.router.get('/:vehid', vehicleController_1.default.getOne);
        this.router.post('/', vehicleController_1.default.create);
        this.router.put('/:vehid', vehicleController_1.default.update);
        this.router.delete('/:vehid', vehicleController_1.default.delete);
        this.router.delete('/saved/:vehid', vehicleController_1.default.saved);
    }
}
exports.default = new VehicleRoutes().router;
