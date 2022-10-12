import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import mutantRoutes from './routes/mutantRoutes';
import vehicleRoutes from './routes/vehicleRoutes';
import powerRoutes from './routes/mutantRoutes';
class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);

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
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server response on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();