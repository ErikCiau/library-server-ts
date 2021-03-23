import { DataTypes } from 'sequelize';

import db from '../../config/dbConnection';
import People from '../People/People.model';
import Book from '../Book/Book.model';


const Requests = db.define('requests', {

   id_request: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   id_people: {
      type: DataTypes.INTEGER,
      references: {
         model: People,
         key: 'id_people'
      }
   },
   id_book: {
      type: DataTypes.INTEGER,
      references: {
         model: Book,
         key: 'id_book'
      }
   },
   accepted: DataTypes.BOOLEAN,
   returned: DataTypes.BOOLEAN,
   orderIn: DataTypes.STRING,
   returnIn: DataTypes.STRING


}, {
   timestamps: false,
})

export default Requests