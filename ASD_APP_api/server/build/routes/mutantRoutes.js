"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mutantController_1 = __importDefault(require("../controllers/mutantController"));
class MutantRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', mutantController_1.default.list);
        this.router.get('/:mutid', mutantController_1.default.getOne);
        this.router.post('/', mutantController_1.default.create);
        this.router.put('/:mutid', mutantController_1.default.update);
        this.router.delete('/:mutid', mutantController_1.default.delete);
        this.router.delete('/survived/:mutid', mutantController_1.default.survived);
    }
}
exports.default = new MutantRoutes().router;
