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
    res.status(200).send(`none-block opp ...and process id = ${process.pid}`)
})
app.get('/timer',(req,res)=>{
    delay(9000);
    res.status(200).send(`block opp => ding ding ding ... and process id = ${process.pid}`)
})
const cpuCore = os.cpus().length;


console.log('it shows 10(8worker + 1master + 1before) times')
if(cluster.isMaster){
    console.log(`master has been started`)
    for(let i=0 ; i<cpuCore ;i++){
        cluster.fork();
    }
}else{
    app.listen(3000);
    console.log(`worker started`)
}

