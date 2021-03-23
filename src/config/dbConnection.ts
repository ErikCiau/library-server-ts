import { Sequelize } from 'sequelize';


const db = new Sequelize(process.env.DB_NAME || 'library', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
   host: process.env.DB_HOST || 'localhost',
   dialect: 'mysql',
   // logging: true
});

export default db;