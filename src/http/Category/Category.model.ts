import { DataTypes } from 'sequelize';
import db from '../../config/dbConnection';


const Category = db.define('categories', {

   id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nameCategory: {
      type: DataTypes.STRING
   },
   cover: {
      type: DataTypes.STRING,
   },
   code: {
      type: DataTypes.STRING
   },
   id_colection: {
      type: DataTypes.INTEGER,
      references: {
         model: 'colections',
         key: 'id_colection'
      }
   }
},
   {
      timestamps: false
   });


export default Category;