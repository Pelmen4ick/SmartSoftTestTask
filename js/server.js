const express = require('express');
const cors = require('cors');
const app = express();

app.use();
app.use(express.json());

app.post('/', (req, res) => {
  console.log('Данные получены:', req.body);
  res.json({ status: 'OK' });
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
