const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000
const server = app.listen(port, ()=>{
    console.log(`Server initiated at port ${port}`);
})

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
app.use(cors())
app.use('/', routes);