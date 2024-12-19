
import {Router} from "express";
import { register,login } from "../controllers/userController.js";

const router=Router();

router.post('/register',register)
router.get('/login',login)




export {router}