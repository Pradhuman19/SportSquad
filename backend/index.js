import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/userRoute.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectDB();
});