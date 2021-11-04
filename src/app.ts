import config from 'config';
import express from 'express';
import routes from './routes';
import connect from './utils/connect';

const PORT = config.get<number>('port');
const HOST = config.get<string>('host');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`App is running on ${HOST}:${PORT}.`);
    routes(app);
    connect();
});
