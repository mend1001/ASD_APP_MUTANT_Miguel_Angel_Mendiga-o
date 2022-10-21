import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import mutantRoutes from './routes/mutantRoutes';
import vehicleRoutes from './routes/vehicleRoutes';
import powerRoutes from './routes/powerRoutes';
import countryRoutes from './routes/countryRoutes';
import  { PORT } from './config'
class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        
    }
    config(): void {
       

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/mutant', mutantRoutes);
        this.app.use('/api/power', powerRoutes);
        this.app.use('/api/vehicle', vehicleRoutes);
        this.app.use('/api/country', countryRoutes);
    }

    start() {
        this.app.listen(PORT)
            console.log('Server response on port',(PORT))
        }
    }



const server = new Server();
server.start();