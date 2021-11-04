import { Request, Response } from 'express';
import { getGigs } from '../service/gig.service';

export const getGigsHandler = (req: Request, res: Response) => {
    try {
        const gigs = getGigs();
        return res.status(200).send({ gigs });
    } catch (err: any) {
        return res.status(202).send({ message: err.message });
    }
};
