import { Router } from "express";


import  {linkCloudflareImage} from '../controllers/link-cloud.js'

const linkCloudRoutes = Router();


linkCloudRoutes.get('/', linkCloudflareImage);

export default linkCloudRoutes;