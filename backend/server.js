require('dotenv').config();
const app = require('./src/index.js')

const port =  5000;

app.listen(port, () => {
  console.log(`Server started on  ${port}`);
});