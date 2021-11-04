import { DataTypes } from 'sequelize';
import db from '../utils/connect';

const GigModel = db.define('gig', {
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
