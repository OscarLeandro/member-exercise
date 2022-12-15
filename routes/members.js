import { Router } from "express";

import { create, getAll, update, remove,read, removeAll, findByTitle } from "../controllers/members.js";

const membersRoutes =  Router();

membersRoutes.post('/', create)
membersRoutes.get('/', getAll)
membersRoutes.get('/browse/',findByTitle)
membersRoutes.put('/:id', update)
membersRoutes.delete('/:id', remove)
membersRoutes.get('/:id',read)
membersRoutes.delete('/', removeAll)




export default membersRoutes;