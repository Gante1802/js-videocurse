const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './confing.env' });
console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
