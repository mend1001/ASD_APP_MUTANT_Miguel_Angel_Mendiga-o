"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const error_handle_1 = require("../utils/error.handle");
class IndexController {
    index(req, res) {
        try {
            res.json({ text: 'API is in /api/' });
        }
        catch (e) {
            (0, error_handle_1.handleHttp)(res, 'ERROR_FIND_ITEMS');
        }
    }
}
exports.indexController = new IndexController;
