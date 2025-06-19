const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const uri = "mongodb+srv://Kaviya:jeni@sih.umf1h.mongodb.net/articles?retryWrites=true&w=majority&appName=sih";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Define Schema and Model
const articleSchema = new mongoose.Schema({
  article_number: String,
  title: String,
  content: String,
  simplified_content: String,
  topic: String
});

const Part5 = mongoose.model('Part5', articleSchema);
const Part6 = mongoose.model('Part6', articleSchema);

// API Endpoint to Fetch Part5 Articles
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Part5.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// API Endpoint to Fetch Part6 Articles
app.get('/api/part6/articles', async (req, res) => {
  try {
    const articles = await Part6.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
