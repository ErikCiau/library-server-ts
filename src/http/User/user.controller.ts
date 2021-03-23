import { Response, Request } from 'express';
import Librarian from './User.model';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { responseHandler } from '../../libs/responseHandler';




export const getLibrarians = async (req: Request, res: Response) => {

   try {
      const librarians = await Librarian.findAll();
      if (!librarians) return res.status(404).json({ ok: false, message: 'Librarians not found' });
      return res.json({ ok: true, librarians });

   } catch (error) {
      return res.status(500).json({ ok: false, error });
   }

}

export const postLibrarian = async (req: Request, res: Response) => {
   const { username, password, email } = req.body;

   try {

      let emailExist = await Librarian.findOne({
         where: {
            email
         }
      })
      if (emailExist) return res.status(400).json({ ok: false, message: 'Email ya existe' });

      let userNew = await Librarian.create({ username, email, password: await hash(password, 10) });

      if (!userNew) return res.status(500).json({ ok: false, message: 'Error on create user' });

      return res.status(201).json({ ok: true, data: userNew });


   } catch (error) {
      console.log(error)
      return res.status(500).json({ ok: false, error });
   }
}

export const logInUser = async (req: Request, res: Response) => {
   const { email, password } = req.body;

   try {

      const userFind = await Librarian.findOne({
         where: {
            email
         }
      })

      if (!userFind) return responseHandler(res, { message: 'Email or password is invalid' }, 400, false);

      const passwordValid = userFind.getDataValue('password')

      const passNotHash = await compare(password, passwordValid)

      if (!passNotHash) return responseHandler(res, { message: 'Email or password is invalid' }, 400, false);

      const token = jwt.sign({ payload: userFind }, process.env.SECRET_JWT || 'secret', { expiresIn: '7d' });

      return res.status(200).json({ ok: true, data: userFind, token });

   } catch (error) {
      return responseHandler(res, error, 500, false)
   }
}