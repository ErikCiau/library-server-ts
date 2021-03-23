import { Response, Request } from 'express'
import { responseHandler } from '../../libs/responseHandler';
import { colorRandom, colors } from '../../libs/colorSelection';
import Book from './Book.model';


export const getBookById = async (req: Request, res: Response) => {

   const { id } = req.params;
   try {

      let book = await Book.findByPk(id);;
      if (!book) return responseHandler(res, { message: `Error on find book with id ${id}` }, 400, false);

      return responseHandler(res, book);


   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}
export const newBook = async (req: Request, res: Response) => {


   const { title, code, author, loan, isbn, category } = req.body;

   try {

      const book = await Book.create({ title, code, author, loan, isbn, id_category: category, cover: colorRandom(colors) })
      if (!book) return responseHandler(res, { message: 'Error on create book' }, 400, false);

      return responseHandler(res, book, 201);

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}
export const getAllBooksByCategory = async (req: Request, res: Response) => {

   const { id } = req.params;

   try {

      const bookFind = await Book.findAll({ where: { id_category: id } });
      if (!bookFind) return responseHandler(res, { message: `Error on find books with category ${id}` }, 400, false);

      return responseHandler(res, bookFind);

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}

