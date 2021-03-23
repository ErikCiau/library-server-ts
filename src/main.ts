import dotenv from 'dotenv';

import Server from './server';



if (process.env.NODE_ENV !== 'production') {
   dotenv.config();
}


const server = new Server()

server.listen();