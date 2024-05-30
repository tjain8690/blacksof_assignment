const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const submissionsRouter = require('./routes/submissions');
app.use('/api/submissions', submissionsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // const proxy = require('http-proxy-middleware');

// app.use('/api', proxy({ target: 'http://localhost:8000', changeOrigin: true }));

// app.listen(3000, () => console.log('Server listening on port 3000'));
