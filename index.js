const express = require('express');
const hookRoutes = require('./routes/hooks.routes');
require('dotenv/config');

function main() {
  const PORT = process.env.PORT || 4444;

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/hooks', hookRoutes);
  app.get('/', (req, res) => {
    res.json({ msg: 'HELLO' });
  });

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

main();
