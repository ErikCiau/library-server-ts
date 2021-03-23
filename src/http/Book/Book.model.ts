import { DataTypes } from 'sequelize'

import db from '../../config/dbConnection'


const Book = db.define('books', {
   id_book: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   title: DataTypes.STRING,
   code: DataTypes.STRING,
   author: DataTypes.STRING,
   loan: DataTypes.BOOLEAN,
   available: DataTypes.BOOLEAN,
   isbn: DataTypes.STRING,
   cover: DataTypes.STRING,

   id_category: {
      type: DataTypes.INTEGER,
      references: {
         model: 'categories',
         key: 'id_category'
      }
   }

}, {
   timestamps: false
})


export default Book;