
import {Router} from "express";
import { register,login } from "../contollers/userController.js";

const router=Router();

router.post('/register',register)
router.get('/login',login)




export {router}