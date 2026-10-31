import express from "express";
import cors from "cors";
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoute from "./src/route/todoRoute.js";

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());
app.use("/", todoRoute);

dbConnect();

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});