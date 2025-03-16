import express from 'express';
import {isAuth} from '../middlewares/isAuth.js';
import  uploadFile from '../middlewares/multer.js';
import {createanEvent, getAllEvents, getSingleEvent} from '../controllers/eventController.js';
import {createTeam} from '../controllers/teamController.js';

const router = express.Router();

router.post('/new', isAuth, uploadFile, createanEvent);
router.get('/allEvents', isAuth, getAllEvents);
router.get('/:id', isAuth, getSingleEvent);
router.post('/register/:id', isAuth, createTeam);

export default router;
