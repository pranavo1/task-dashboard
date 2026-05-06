const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/', (req,res)=>{
    res.send('ProjectFlow API Running');
});

app.get('/tasks', (req,res)=>{
    res.json(tasks);
});

app.post('/tasks', (req,res)=>{
    const task = {
        id: Date.now(),
        taskName: req.body.taskName,
        member: req.body.member
    };

    tasks.push(task);

    res.json({
        message: 'Task Created',
        task
    });
});

  app.listen(8000, ()=>{
    console.log('Server Running');
});