import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRouter from "./routes/auth.js";
import resumeRouter from "./routes/resumeManagement.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/resumes", resumeRouter);

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port`));
});
PORT;
