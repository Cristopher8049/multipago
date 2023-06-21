require('dotenv').config();
const app = require("./app");
const host = "0.0.0.0";
const port = 8000;

app.listen(port, host, () =>
  console.log(
    `The systems are running on the port ${port}`
  )
);
