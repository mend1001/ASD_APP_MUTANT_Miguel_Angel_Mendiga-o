import express, { Router } from 'express';

import vehicleController from '../controllers/vehicleController';

class VehicleRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/vehicle/', vehicleController.list);
        this.router.get('/vehicle/:mutid', vehicleController.getOne);
        this.router.post('/vehicle/', vehicleController.create);
        this.router.put('/vehicle/:mutid', vehicleController.update);
        this.router.delete('/vehicle/:mutid', vehicleController.delete);
    }

}

export default new VehicleRoutes().router;

