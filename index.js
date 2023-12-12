const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/welcome/:nama?', (req, res) => {
  const nama = req.params.nama || 'Anonymous';
  const timestamp = new Date().toLocaleString();

  if (nama === "admin") {
    console.log(`${timestamp} ${process.env.ADMIN_PASS}`)
  }

  console.log(`${timestamp}: Welcome ${nama}`);

  res.status(200).json({
    msg: `Welcome ${nama}`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
