"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const powerController_1 = __importDefault(require("../controllers/powerController"));
class PowerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', powerController_1.default.list);
        this.router.get('/:podid', powerController_1.default.getOne);
        this.router.post('/', powerController_1.default.createPowerMutant);
        this.router.put('/:podid', powerController_1.default.update);
        this.router.delete('/:mutid', powerController_1.default.delete);
    }
}
exports.default = new PowerRoutes().router;
