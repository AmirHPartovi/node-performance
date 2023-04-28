const express = require('express')
const os = require('os');
const cluster = require('cluster')
const app = express();

const delay =(time)=>{
    const startTime = Date.now()
    while( Date.now() - startTime < time){
        //block opp
    }
}
app.get('/',(req,res)=>{
    res.status(200).send('none block opp ...')
})
app.get('/timer',(req,res)=>{
    delay(9000);
    res.status(200).send('ding ding ding ...')
})



app.listen(3000);