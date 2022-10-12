import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

class IndexController {

    public index(req: Request, res: Response) {
        try{
        res.json({text: 'API is in /api/'});
        }
        catch (e){handleHttp(res, 'ERROR_FIND_ITEMS')}
    }

}

export const indexController = new IndexController;