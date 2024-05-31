import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
dotenv.config();


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.lof(err);
});
const app = express();


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



app.use('/api/user',userRoutes);