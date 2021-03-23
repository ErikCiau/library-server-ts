import { Response } from 'express'



export const responseHandler = (res: Response, data = {}, statusNumber = 200, status = true) => {
   return res.status(statusNumber).json({ ok: status, data });
}