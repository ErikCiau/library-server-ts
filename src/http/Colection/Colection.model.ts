import { DataTypes } from 'sequelize';

import db from '../../config/dbConnection';


const Colection = db.define('colection', {
   id_colection: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   nameColection: {
      type: DataTypes.STRING
   },
   code: {
      type: DataTypes.STRING,
      unique: true
   },
   cover: {
      type: DataTypes.STRING
   }
}, {
   timestamps: false,
});

export default Colection