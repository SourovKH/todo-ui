const express = require('express');

const PORT = 8001;

const main = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Backend Network: http://localhost:${PORT}`);
  })
}

main();