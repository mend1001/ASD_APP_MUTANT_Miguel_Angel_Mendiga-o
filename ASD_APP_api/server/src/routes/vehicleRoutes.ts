import express, { Router } from 'express';

import vehicleController from '../controllers/vehicleController';

class VehicleRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', vehicleController.list);
        this.router.get('/:vehid', vehicleController.getOne);
        this.router.post('/', vehicleController.create);
        this.router.put('/:vehid', vehicleController.update);
        this.router.delete('/:vehid', vehicleController.delete);
        this.router.delete('/survived/:vehid', vehicleController.delete);
    }

}

export default new VehicleRoutes().router;

