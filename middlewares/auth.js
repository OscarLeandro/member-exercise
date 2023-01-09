import admin from 'firebase-admin'
import { FIREBASE_KEYS } from '../config/fbServiceAccountKey.js'


admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_KEYS),
});

export const authCheck = async (req) => {
  console.log(req.headers.authtoken)
    try {
     //const currentUser = await admin.auth().verifyIdToken(req.headers.authtoken);
     const currentUser = await admin.auth().verifyIdToken(req.headers.authtoken);
     return currentUser;
   } catch (error) {
     console.log("AUTH CHECK ERROR", error);
     throw new Error("Invalid or expired token");
   }
 };

//  export const roleCheck = async (email, role) => {

//   try {

    
//   } catch (error) {
    
//   }

//  }