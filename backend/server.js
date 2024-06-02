// basic express server --> es6 feature
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = 4000;

//  middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use("/api/food" ,foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("api workingg");
});
//  delete , post , update etc

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// mongodb+srv://vishakha:vishakha@cluster0.tk0fgbw.mongodb.net/?

// mongodb+srv://vishakha:vishakha@cluster0.tk0fgbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
