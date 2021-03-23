import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
   dotenv.config();
}


const db = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '@', {
   host: process.env.DB_HOST || '',
   dialect: 'mysql',
   // logging: true
});
console.log(process.env.DB_HOST)
export default db;