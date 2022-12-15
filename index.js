import "dotenv/config";
import express from "express";
import cors from "cors";
import membersRoutes from "./routes/members.js";
import usersRoutes from "./routes/users.js";
import linkCloudRoutes from "./routes/link-cloud.js";
import './database/index.js'

const app = express();

const whiteList = ["httep: servidor en vercel"];
app.use(
    cors()
  );
app.use(express.json());

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));


app.use('/api/members/', membersRoutes)
app.use('/api/users/', usersRoutes)
app.use('/api/link/', linkCloudRoutes)




const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))