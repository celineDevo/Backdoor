const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Utilisation "normale" de la lib malveillante
require('evil-lib')();

app.get('/', (req, res) => {
  res.send('Hello from the vulnerable web app!');
});

app.listen(port, () => {
  console.log(`Web app listening on http://localhost:${port}`);
});
