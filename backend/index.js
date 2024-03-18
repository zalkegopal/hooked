import express from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const mongodbURL = process.env.MONGO_DB_URL;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.log('Mongodv error-', error);
  });

app.get('/', (req, res) => {
  console.log('/home accessed');
  res.status(200).json({ message: 'hooked home' });
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Hooked server is listening on port ', PORT);
});
