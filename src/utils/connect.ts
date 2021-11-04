import config from 'config';
import { Sequelize } from 'sequelize';

interface dbConnectionType {
    Host: string;
    Uri: string;
    Port: number;
    Name: string;
    User: string;
    Pass: string;
}

const { Host, Uri, Port, Name, User, Pass } =
    config.get<dbConnectionType>('db');

export default new Sequelize(Name, User, Pass, {
    host: Uri,
    port: Port,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
