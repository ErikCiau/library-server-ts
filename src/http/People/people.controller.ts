import { Response, Request } from 'express'
import { responseHandler } from '../../libs/responseHandler'
import People from './People.model';
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken';



export const registerPeople = async (req: Request, res: Response) => {
   const { username, enrollment, password, grade, group, career, phoneNumber } = req.body;
   try {
      let userExist = await People.findOne({ where: { enrollment } });
      if (userExist) return responseHandler(res, { message: 'enrollment already exist' }, 400, false);

      let newPeople = await People.create({ username, enrollment, password: await hash(password, 10), grade, group, career, phoneNumber });
      if (!newPeople) return responseHandler(res, { message: 'Error on register user' })

      return responseHandler(res, newPeople, 201);
   } catch (error) {
      return responseHandler(res, error, 500, false);
   }
}


export const loginUser = async (req: Request, res: Response) => {
   const { enrollment, password } = req.body;

   try {
      let peopleFind = await People.findOne({ where: { enrollment } });
      if (!peopleFind) return responseHandler(res, { message: 'Enrollment or password is invalid' }, 400, false);

      const passwordHash = peopleFind.getDataValue('password');
      const passwordValidate = await compare(password, passwordHash);
      if (!passwordValidate) return responseHandler(res, { message: 'Enrollment or password is invalid' }, 400, false);

      const token = jwt.sign({ payload: peopleFind }, process.env.SECRET_JWT || 'secret', { expiresIn: '7d' });
      return res.status(200).json({ ok: true, data: peopleFind, token })

   } catch (error) {
      return responseHandler(res, error, 500, false);
   }
}