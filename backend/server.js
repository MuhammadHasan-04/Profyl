import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRouter from "./routes/auth.js";
import resumeRouter from "./routes/resumeManagement.js";
import resumeUploading from "./routes/resumeUploading.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api", resumeUploading);

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
