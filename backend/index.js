import express from "express";
import cookieParser from "cookie-parser";  
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
<<<<<<< HEAD
    origin: process.env.FRONTEND_URI,
=======
    origin:process.env.CLIENT,
>>>>>>> 5c3222f548290c23423396a6e5fc7e1e0cd19582
    credentials:true
}
app.use(cors(corsOptions));
const PORT=process.env.PORT||3000;


//apis
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port${PORT}`);
})