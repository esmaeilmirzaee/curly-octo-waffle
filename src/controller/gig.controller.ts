import { Request, Response } from 'express';
import { createGig, getGigs } from '../service/gig.service';

export const getGigsHandler = async (req: Request, res: Response) => {
    try {
        const gigs = await getGigs();
        return res.status(200).send({ gigs });
    } catch (err: any) {
        return res.status(202).send({ message: err.message });
    }
};

export const createGigHandler = async (req: Request, res: Response) => {
    try {
        const result = await createGig(req.body);
        return res.status(201).send({ result });
    } catch (err: any) {
        return res.status(203).send({ message: err.message });
    }
};
