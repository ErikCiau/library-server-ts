import { Response, Request } from 'express';
import { responseHandler } from '../../libs/responseHandler';
import Colection from './Colection.model';


export const newColection = async (req: Request, res: Response) => {

   const { nameColection, code, cover } = req.body;

   try {

      const colection = await Colection.create({ nameColection, code, cover });
      if (!colection) return responseHandler(res, { message: 'Error on create colection' }, 400, false);

      return responseHandler(res, colection, 201);

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}

export const getAllColections = async (req: Request, res: Response) => {
   try {

      const colection = await Colection.findAll();
      if (!colection) return responseHandler(res, { message: 'Error on find colections' }, 400, false);

      return responseHandler(res, colection);

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }
}