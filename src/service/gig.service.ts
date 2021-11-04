import { FindOptions } from 'sequelize/types';
import GigModel from '../model/gig.model';

export const getGigs = async (query?: FindOptions | undefined) => {
    try {
        return await GigModel.findAll(query);
    } catch (err: any) {
        console.error(err.message);
        throw new Error(`Gig Model, ${err.message}`);
    }
};

export const createGig = async (gig: any) => {
    try {
        const { title, description, email, technologies, budget } = gig;
        let result = await GigModel.create({
            title,
            description,
            email,
            technologies,
            budget,
        });
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
};
