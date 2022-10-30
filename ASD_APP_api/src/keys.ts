import{
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_USER
} from './config'

export default {

    database: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
    }

}