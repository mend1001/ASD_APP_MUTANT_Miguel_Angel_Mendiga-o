import { Request, Response } from 'express';


import pool from '../database';
import { handleHttp } from '../utils/error.handle';

class MutantController {

    public async list(req: Request, res: Response): Promise<void> {
        try{
        const mutant = await pool.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  asd_prueba.t_mutantes AS mut  LEFT JOIN asd_prueba.t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN asd_prueba.t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN asd_prueba.t_condicion AS con ON mut.conid = con.conid  LEFT JOIN asd_prueba.t_pais AS pai ON mut.paiid = pai.paiid  left join  asd_prueba.t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join asd_prueba.t_poder AS pod ON pmu.podid = pod.podid GROUP BY mut.mutid ORDER BY mut.mutid ASC ');
        res.json(mutant);
        }
        catch(e) {
            res.status(500).json({ text: "Please fill current field" });
            handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }
 
    public async getOne(req: Request, res: Response): Promise<any> {
        try{
        const { mutid } = req.params;
        const mutant = await pool.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  asd_prueba.t_mutantes AS mut  LEFT JOIN asd_prueba.t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN asd_prueba.t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN asd_prueba.t_condicion AS con ON mut.conid = con.conid  LEFT JOIN asd_prueba.t_pais AS pai ON mut.paiid = pai.paiid  left join  asd_prueba.t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join asd_prueba.t_poder AS pod ON pmu.podid = pod.podid  WHERE mut.mutid = ?   GROUP BY mut.mutid ', [mutid]);
        console.log(mutant.length);
        if (mutant.length > 0) {
            res.status(500).json({ text: "Please fill current field" });
            return res.json(mutant[0]);
        }
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }catch(e) {
        handleHttp(res, 'ERROR_FIND_ITEMS');
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
        const result = await pool.query('INSERT INTO asd_prueba.t_mutantes SET ?', [req.body]);
        const { mutnom, mutapodo, mutactivo, paiid, podmutid } = req.body;
        if (mutnom == "" || mutapodo == "" || mutactivo == "" || paiid == "" || podmutid == "") {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        res.json({ message: 'Mutant Saved' });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try{
        const { mutid } = req.params;
        const oldMutant = req.body;
        await pool.query('UPDATE asd_prueba.t_mutantes SET ? WHERE mutid = ?', [req.body, mutid]);
        res.json({ message: "The mutant was Updated" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try{
        const { mutid } = req.params;
        await pool.query("UPDATE asd_prueba.t_mutantes SET t_mutantes.mutactivo = '0' WHERE mutid = ?", [mutid]);
        res.json({ message: "The mutant was deleted" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
            
    }
    public async survived(req: Request, res: Response): Promise<void> {
        try{
        const { mutid } = req.params;
        await pool.query("UPDATE asd_prueba.t_mutantes SET t_mutantes.mutactivo = '1' WHERE mutid = ?", [mutid]);
        res.json({ message: "The mutant was deleted" });
    }
    catch(e) {
        res.status(500).json({ text: "Please fill current field" });
        handleHttp(res, 'ERROR_FIND_ITEMS');
    }
            
    }
}

const mutantController = new MutantController;
export default mutantController;