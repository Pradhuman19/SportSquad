import express from 'express';
import {isAuth} from '../middlewares/isAuth.js';
import  uploadFile from '../middlewares/multer.js';
import { createanEvent } from '../controllers/eventController.js';

const router = express.Router();

router.post('/new', isAuth, uploadFile, createanEvent);

export default router;
