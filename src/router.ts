import { Router } from 'express';

const router = Router();

import { AuthToken } from './middlewares/authToken';

import * as librarianController from './http/User/user.controller';
import * as peopleController from './http/People/people.controller';
import * as colectionController from './http/Colection/colection.controller';
import * as categoryController from './http/Category/category.controller';
import * as bookController from './http/Book/Book.controller'
import * as requestController from './http/Request/request.controller';

router.post('/users', librarianController.postLibrarian)
   .post('/login', librarianController.logInUser);

router.post('/peoples', peopleController.registerPeople)
   .post('/login/peoples', peopleController.loginUser);

router.get('/colections', colectionController.getAllColections)
   .post('/colections', colectionController.newColection);


router.post('/categories', categoryController.newCategory)
   .get('/categories/:id', categoryController.getCategoryByColection);

router.post('/books', bookController.newBook)
   .get('/books/category/:id', bookController.getAllBooksByCategory)
   .get('/books/:id', bookController.getBookById);


router.post('/requests', AuthToken, requestController.newRequest);

export default router;