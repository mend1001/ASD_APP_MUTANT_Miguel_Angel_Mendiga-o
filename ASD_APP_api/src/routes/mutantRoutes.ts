import express, { Router } from 'express';
import mutantController from '../controllers/mutantController';



class MutantRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', mutantController.list);
        this.router.get('/:mutid', mutantController.getOne);
        this.router.post('/', mutantController.create);
        this.router.put('/:mutid', mutantController.update);
        this.router.delete('/:mutid', mutantController.delete);
        this.router.delete('/survived/:mutid', mutantController.survived);
    }

}

export default new MutantRoutes().router;

