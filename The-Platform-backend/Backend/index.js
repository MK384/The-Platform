const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;    // process.env  To avoid port conflicts


app.use(cors());
app.use(bodyParser.json());
// cors
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200', // link angular
    Credential: true,
}));

// connect with database MongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/the platform');
    console.log('✅ Connected to MongoDB.');
  } catch (err) {
    console.error(' Error connecting to MongoDB:', err);
    setTimeout(connectDB, 5000);  // Retry after 5 seconds 

  }
};

connectDB();

// schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

//  (Signup)
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    // if user found before
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // bcrypt password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error in signup:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

//  Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    //search about users  

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    return res.json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error in login:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
