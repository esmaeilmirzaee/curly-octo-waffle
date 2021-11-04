import { FindOptions } from 'sequelize/types';
import GigModel from '../model/gig.model';

export const getGigs = async (query?: FindOptions | undefined) => {
    try {
        let response = await GigModel.findAll(query);
        console.error(response);

        return response;
    } catch (err: any) {
        console.error(err.message);
        throw new Error(`Gig Model, ${err.message}`);
    }
};
