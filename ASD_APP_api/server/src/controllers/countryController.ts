import { Request, Response } from 'express';


import pool from '../database';
import { handleHttp } from '../utils/error.handle';

class CountryController {

    public async list(req: Request, res: Response): Promise<void> {
        try{
        const country = await pool.query('SELECT * FROM asd_prueba.t_pais AS pai ORDER BY pai.paiid ASC ');
        res.json(country);
        }
        catch(e) {
            res.status(500).json({ text: "Please fill current field" });
            handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }
 
   
}

const countryController = new CountryController;
export default countryController;