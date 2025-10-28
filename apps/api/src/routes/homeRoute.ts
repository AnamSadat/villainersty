import express from 'express';
import HomeController from '../controllers/homeController';

const router = express.Router();

router.get('/hello', HomeController.getHello);
router.get('/', HomeController.getHome);

export default router;
