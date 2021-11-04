import { Express, Request, Response } from 'express';
import { getGigsHandler } from './controller/gig.controller';
export default function routes(app: Express) {
    app.get('/healthcheck', (_: Request, res: Response) =>
        res.status(200).send({ message: 'Everything looks OK.👍🏻👍🏻👍🏻👍🏻 ' }),
    );

    // Gigs
    app.get('/api/v1/gigs', getGigsHandler);
}
