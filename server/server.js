const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 8000;
require('./config/product.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/product.routes')(app);
app.listen(puerto, () => {
    console.log(`Listening at Port ${puerto}`)
})