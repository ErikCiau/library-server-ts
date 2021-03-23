import { DataTypes } from 'sequelize'
import db from '../../config/dbConnection';

const People = db.define('Peoples', {
   id_people: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   username: {
      type: DataTypes.STRING,
   },
   enrollment: {
      type: DataTypes.STRING,
      unique: true
   },
   password: {
      type: DataTypes.STRING
   },
   grade: {
      type: DataTypes.INTEGER
   },
   group: {
      type: DataTypes.STRING
   },
   career: {
      type: DataTypes.STRING
   },
   phoneNumber: {
      type: DataTypes.STRING
   }
}, {
   timestamps: false
})

export default People;