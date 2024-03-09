const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./models/dataModel');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

let count = { add: 0, update: 0 };

app.post('/api/data/add', (req, res) => {
  count.add++;
  res.status(200).json({ message: 'Data added successfully', count });
});

app.put('/api/data/update', (req, res) => {
  count.update++;
  res.status(200).json({ message: 'Data updated successfully', count });
});

app.get('/api/data/count', (req, res) => {
  res.status(200).json(count);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});