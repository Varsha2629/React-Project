const express = require('express');
const app = express();
app.use(express.json());

let basicGoals = {
    items: [
        { text: 'Do all Tasks!', id: 'g1' },
        { text: 'Complete everyday Tasks!', id: 'g2' }
    ]
};

app.use((req, res, next) => {
    res.header ('Access-Control-Allow-Origin', '*');
    res.header ('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,PATCH,DELETE,POST,GET');
        return res.status(200).json({}); 
    };
    next();
});

app.get("/", (req, res) => {
    let titleResponse = {
        title: "hey! this is varsha's goal"
    }
    res.json(titleResponse);
})

app.get("/goals", (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json(basicGoals);
})

app.post("/goals", (req, res) => {
    let newGoal = req.body;
    
    basicGoals.items.unshift(newGoal);
    res.setHeader('Content-Type', 'application/json')
    res.json(basicGoals);
})

app.delete("/goals", (req, res)=> {
    let goalId = req.body.id;
    basicGoals.items = basicGoals.items.filter((g) => g.id !== goalId);
    res.setHeader('Content-Type', 'application/json')
    res.json(basicGoals);
})
app.listen(8000, function(){
    console.log("The goal server has started");
})