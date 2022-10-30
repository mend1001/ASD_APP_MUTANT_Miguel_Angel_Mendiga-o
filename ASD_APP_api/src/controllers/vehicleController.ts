import { Request, Response } from 'express';


import pool from '../database';
import { handleHttp } from '../utils/error.handle';

class VehicleController {

    public async list(req: Request, res: Response): Promise<void> {
        try{
        const vehicle = await pool.query('SELECT * FROM asd_prueba.t_vehiculo AS veh ORDER BY veh.vehid ASC ');
        res.json(vehicle);
        }
        catch(e) {
            res.status(500).json({ text: "Please fill current field" });
            handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }
 
    public async getOne(req: Request, res: Response): Promise<any> {
        try{
        const { vehid } = req.params;
        const vehicle = await pool.query('SELECT * FROM  asd_prueba.t_vehiculo AS veh WHERE veh.vehid = ? ', [vehid]);
        console.log(vehicle.length);
        if (vehicle.length > 0) {
            
            return res.json(vehicle[0]);
        }
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }catch(e) {
        res.status(500).json({ text: "Please fill current field" });
            
        handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
        const result = await pool.query('INSERT INTO asd_prueba.t_vehiculo SET ?', [req.body]);
        const { vehnom } = req.body;
        if (vehnom == "" ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        res.json({ message: 'vehicle Saved' });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try{
        const { vehid } = req.params;
        const oldVehicle = req.body;
        await pool.query('UPDATE asd_prueba.t_vehiculo SET ? WHERE vehid = ?', [req.body, vehid]);
        res.json({ message: "The vehicle was Updated" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try{
        const { vehid } = req.params;
        await pool.query("UPDATE asd_prueba.t_vehiculo SET t_vehiculo.vehactivo = '0' WHERE vehid = ?", [vehid]);
        res.json({ message: "The vehicle was deleted" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
            
    }
    public async survived(req: Request, res: Response): Promise<void> {
        try{
        const { vehid } = req.params;
        await pool.query("UPDATE asd_prueba.t_vehiculo SET t_vehiculo.vehactivo = '1' WHERE vehid = ?", [vehid]);
        res.json({ message: "The vehicle was deleted" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
            
    }
}

const vehicleController = new VehicleController;
export default vehicleController;