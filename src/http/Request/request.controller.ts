import { Response, Request } from 'express'
import Requests from './Request.model';
import Book from '../Book/Book.model';
import { date } from '../../libs/dateOrder';
import { responseHandler } from '../../libs/responseHandler';


export const newRequest = async (req: any, res: Response) => {

   const { id_people } = req.user;

   const idBook = req.body.book;

   try {

      let bookFind = await Book.findOne({
         where: {
            id_book: idBook,
            available: 1,
            loan: 1
         }
      })

      if (!bookFind) return responseHandler(res, { message: 'Book not is available' }, 400, false);

      let newRequest = await Requests.create({

         id_people,
         id_book: idBook,
         orderIn: date().now,
         returnIn: date().returned
      })

      if (!newRequest) return responseHandler(res, { message: 'Error on create request' }, 400, false);

      bookFind.setDataValue('available', 0)


      await bookFind.save()



      return responseHandler(res, newRequest, 201);


   } catch (error) {
      return responseHandler(res, error, 500, false);
   }
}