import { DataTypes } from 'sequelize/types';
import db from '../utils/connect';

const GigModel = db.define('Gig', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    technologies: {
        type: DataTypes.STRING,
    },
    budget: {
        type: DataTypes.STRING,
    },
});

export default GigModel;
