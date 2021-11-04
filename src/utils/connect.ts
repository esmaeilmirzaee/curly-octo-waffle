import config from 'config';
import { Sequelize } from 'sequelize';

interface dbConnectionType {
    Uri: string;
    Port: number;
    Name: string;
    User: string;
    Pass: string;
}

export default function connect() {
    const { Uri, Port, Name, User, Pass } = config.get<dbConnectionType>('db');

    const db = new Sequelize(Name, User, Pass, {
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

    db.authenticate()
        .then(() => console.log('DB is connected. 🚀🚀🚀🚀🚀'))
        .catch((err) => {
            console.error(
                'DB is disconnected. ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥',
                err.message,
            );
            process.exit(-1);
        });
}
