import { Response, Request } from 'express'
import * as jwt from 'jsonwebtoken';
import { responseHandler } from '../libs/responseHandler';



export const AuthToken = async (req: Request, res: Response, next: Function) => {
   let token: string | any = req.get('token');

   const secret: jwt.Secret = process.env.SECRET_JWT || 'secret';
   jwt.verify(token, secret, {}, (err, decode) => {

      if (err) return responseHandler(res, err, 403, false);

      req.user = decode.payload;

      next()

   });

};
