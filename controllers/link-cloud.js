import axios from "axios";
import { authCheck } from "../middlewares/auth.js";
import FormData from "form-data";

export const linkCloudflareImage = async (req, res) => {
  try {
    //const authSaludo = await authCheck(req);
    const body = new FormData();
    body.append("requireSignedURLs", "false");

    // KEYS
    const AUTH_TOKEN = process.env.TOKEN_CLOUDFLARE;
    const GENERATE_LINK = process.env.CLOUDFLARE_GENERATE_LINK_UPLOAD;

    // Generate link from cloudinary
    const  data  = await axios.post(GENERATE_LINK, body, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    //console.log(data)
    res.setHeader('Content-Type', 'text/plain; charset=utf-8').json(data)

    //return data;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
