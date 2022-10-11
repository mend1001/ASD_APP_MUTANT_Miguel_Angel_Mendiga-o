"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        try{
        res.json({ text: 'API is in /api/mutant' });
        }
        catch (e){ handleHttp(res, 'ERROR_FIND_ITEMS')}
    }
}
exports.indexController = new IndexController;
