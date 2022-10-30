import express, { Router } from 'express';
import countryController from '../controllers/countryController';




class CountryRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', countryController.list);

    }

}

export default new CountryRoutes().router;

