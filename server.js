const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json({
    type: "*/*"
}));
app.use(express.urlencoded({ extended: true }));
app.use(routes); 



const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Servidor corriendo en puerto: ${port}`));


