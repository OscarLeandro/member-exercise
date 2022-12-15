
import { Router } from "express";
import { create, getAll, auth, userExist, displayNameExist } from "../controllers/users.js";

const usersRoutes = Router()

usersRoutes.get('/', getAll);
usersRoutes.post('/', create)
usersRoutes.post('/auth',auth)
usersRoutes.post('/token',userExist)
usersRoutes.get('/display-name/:displayName',displayNameExist)

export default usersRoutes;