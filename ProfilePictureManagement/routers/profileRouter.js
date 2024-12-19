import {Router} from "express";
import { uploadProfilePicture,updateProfilePicture } from "../controllers/profileController.js";
import upload from "../filestorage/file.js";
const profileRouter=Router()

profileRouter.post('/upload', upload.single('profilePicture'), uploadProfilePicture)

profileRouter.get('/update:id', updateProfilePicture)
export default profileRouter