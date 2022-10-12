import express, { Router } from 'express';
import powerController from '../controllers/powerController';



class PowerRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', powerController.list);
        this.router.get('/:podid', powerController.getOne);
        this.router.post('/', powerController.createPowerMutant);
        this.router.put('/:podid', powerController.update);
    }

}

export default new PowerRoutes().router;

