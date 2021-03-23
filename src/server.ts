import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import db from './config/dbConnection';
import dotenv from 'dotenv';
import router from './router';

class Server {

   private app: Application;
   private port: string;
   private configCors: CorsOptions = { origin: "*", methods: ['GET', 'POST', 'PUT'] };

   private dotenv = dotenv;

   private versionApi = 'v3';

   constructor() {

      if (process.env.NODE_ENV !== 'production') {
         this.dotenv.config();
      }
      this.app = express();
      this.port = process.env.PORT || '3000';

      this.dbConecttion()
      this.appMiddlewares()
      this.useRoutes()
   }
   private appMiddlewares() {

      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());
      this.app.use(cors(this.configCors));

   }

   private useRoutes() {
      // this.app.use(`/api/${this.versionApi}/users`, UserRoutes)
      this.app.use(`/api/${this.versionApi}`, router);
   }
   private async dbConecttion() {

      try {
         await db.authenticate()
         console.log('Base de datos conectada')
      } catch (error) {
         throw new Error(error);
      }

   }
   public listen() {
      this.app.listen(this.port, () => {
         console.log('server on port ', this.port);
      })
   }

}

export default Server;