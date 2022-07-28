const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');

const app = express();
const tasks = require('./routes/tasks');

app.use(express.static('./public')) 
app.use(express.json());

app.get('/hello', (req, res)=>{
res.send('task manager')
})
app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('server is listening on port 3000'));
    }catch(error){
        console.log(error);
    }
}

start();
