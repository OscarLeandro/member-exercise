import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MEMBER_CLOUD_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB CONNECTED");
} catch (err) {
  console.log("DB CONNECTION ERR", err);
  process.exit(1);
}
