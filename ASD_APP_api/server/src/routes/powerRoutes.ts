import express, { Router } from 'express';

import powerController from '../controllers/powerController';

class PowerRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/power', powerController.list);
        this.router.get('/power/:podid', powerController.getOne);
        this.router.post('/power/', powerController.createPowerMutant);
        this.router.put('/power:podid', powerController.update);
    }

}

export default new PowerRoutes().router;

