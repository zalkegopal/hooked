import express from 'express';
import User from '../models/user.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const router = express();

// endpoint to register user
router.post('/signup', async (req, res) => {
  try {
    console.log('singup');
    const { name, email, password } = req.body;
    // check if the user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const newUser = new User({ name, email, password: hashedPassword });
    // generate verification token
    newUser.verificationToken = await crypto.randomBytes(20).toString('hex');
    // save user to db
    await newUser.save();
    // send verificaiton email
    sendVerificationEmail(newUser.email, newUser.verificationToken);
    res.status(201).json({ message: name + ' successfully registered.' });
  } catch (error) {
    console.log('signup error-', error)
    res.status(500).json({ error: 'Intenal server error' });
  }
});

router.post('/login', (req, res) => {
  console.log('login');
  res.status(200).json({ message: 'Successfully logged in.' });
});

// endpoint to verify email
router.get('/verify', async (req, res) => {
  try {
    const token = req.params.token9;
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      res.status(404).json({ message: 'Invalid verification token' });
    }
    // mark as verified
    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully.' });
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json({ message: 'Email verification failed.' });
  }
});

const sendVerificationEmail = (email, token) => {
  const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gopalzalke@gmail.com',
      pass: 'jhsbtqmiyvcwxrkg',
    },
  });

  const mailOptions = {
    from: 'hooked.com',
    to: email,
    subject: 'Email verification',
    text:
      `Hello,\n Welcome to hooked.com. Please click on the link to verify your account.\n
      http://localhost:3000/auth/verify/${token}`,
  };

  try {
    mailer.sendMail(mailOptions);
  } catch (error) {
    console.log('error sending verification email');
  }
};

export default router;
