const express = require('express');
const router = require('./Routers/taskRouter');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./Config/dbConfig');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

dotenv.config();
connectDB();

app.use(bodyParser.json());
app.use('/api/v1', router);

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})