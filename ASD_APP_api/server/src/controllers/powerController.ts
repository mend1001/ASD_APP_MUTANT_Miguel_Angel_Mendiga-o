import { Request, Response } from 'express';


import pool from '../database';
import { handleHttp } from '../utils/error.handle';

class PowerController {

    public async list(req: Request, res: Response): Promise<void> {
        try{
        const power = await pool.query('SELECT *  FROM  asd_prueba.t_poder AS pod GROUP BY pod.podid ');
        res.json(power);
        }
        catch(e) {
            res.status(500).json({ text: "Please fill current field" });
            handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }
 
    public async getOne(req: Request, res: Response): Promise<any> {
        try{
        const { podid } = req.params;
        const power = await pool.query('SELECT *  FROM  asd_prueba.t_poder AS pod  WHERE pod.podid = ?   GROUP BY pod.podid', [podid]);
        console.log(power.length);
        if (power.length > 0) {
            res.status(500).json({ text: "Please fill current field" });
            return res.json(power[0]);
        }
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }catch(e) {
        handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }

    public async createPowerMutant(req: Request, res: Response): Promise<void> {
        try{
        const result = await pool.query('INSERT INTO asd_prueba.t_poder_mutante SET ?', [req.body]);
        const { podid, mutid } = req.body;
        if (podid == "" || mutid == "" ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        res.json({ message: 'Power Saved' });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try{
        const { podid } = req.params;
        const oldPower = req.body;
        await pool.query('UPDATE asd_prueba.t_poder SET ? WHERE podid = ?', [req.body, podid]);
        res.json({ message: "The power was Updated" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

}

const powerController = new PowerController;
export default powerController;