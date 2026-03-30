require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Speech backend is running');
});


const speechRoutes = require('./speechRoutes');
app.use('/', speechRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
