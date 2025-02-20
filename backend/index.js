import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;


app.use('/api/users', userRoute);
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectDB();
});