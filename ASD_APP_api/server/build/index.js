"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const mutantRoutes_1 = __importDefault(require("./routes/mutantRoutes"));
const vehicleRoutes_1 = __importDefault(require("./routes/vehicleRoutes"));
const powerRoutes_1 = __importDefault(require("./routes/powerRoutes"));
const countryRoutes_1 = __importDefault(require("./routes/countryRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/mutant', mutantRoutes_1.default);
        this.app.use('/api/power', powerRoutes_1.default);
        this.app.use('/api/vehicle', vehicleRoutes_1.default);
        this.app.use('/api/country', countryRoutes_1.default);
        this.app.use((req, res,next)=>{res.status(404).json({Message: 'endpoint not found'})});

    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server response on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
