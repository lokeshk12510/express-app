const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`App started at port:${PORT}`);
});
