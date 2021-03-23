import { Response, Request } from 'express'
import { responseHandler } from '../../libs/responseHandler';
import { colorRandom, colors } from '../../libs/colorSelection';
import Category from './Category.model'


export const newCategory = async (req: Request, res: Response) => {

   const { nameCategory, code, colection } = req.body;

   try {
      const category = await Category.create({ nameCategory, code, id_colection: colection, cover: colorRandom(colors) });
      if (!category) return responseHandler(res, { message: 'Error on create category' }, 400, false);

      return responseHandler(res, category, 201);
   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}

export const getCategoryByColection = async (req: Request, res: Response) => {

   const { id } = req.params;
   try {

      let categoryFind = await Category.findAll({
         where: {
            id_colection: id
         }
      });

      if (!categoryFind) return responseHandler(res, { message: 'Error on find category' }, 400, false);

      return responseHandler(res, categoryFind);

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }

}
