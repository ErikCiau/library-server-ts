import { DataTypes } from 'sequelize'
import db from '../../config/dbConnection';


let Librarian = db.define('Librarian', {
   id_librarian: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   username: {
      type: DataTypes.STRING
   },
   email: {
      type: DataTypes.STRING
   },
   password: {
      type: DataTypes.STRING,

   }
}, {
   timestamps: false
})


export default Librarian;