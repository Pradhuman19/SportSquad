import express from 'express'; 
import {loginUser, registerUser, myProfile , logout} from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', isAuth, myProfile);
router.get('/logout', isAuth,logout);

export default router;