const express = require('express')
// const os = require('os');
// const cluster = require('cluster')


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
    delay(4000);
    res.status(200).send(`block opp => ding ding ding ... and process id = ${process.pid}`)
})

app.listen(3000);


// just with cluster

// const cpuCore = os.cpus().length;
// console.log('it shows 10 times (8worker + 1master + 1before)')
// if(cluster.isMaster){
//     console.log(`master has been started`)
//     for(let i=0 ; i<cpuCore ;i++){
//         cluster.fork();
//     }
// }else{
//     app.listen(3000);
//     console.log(`worker started`)
// }

// load balancing => round-robin 
//first req => first worker
//second req => second worker
//and so on


//pm2 start server.js
//pm2 start server.js -i [2 number of worker] //2 worker
//pm2 start server.js -i max //max worker
//pm2 stop [idServer]
//pm2 delete server
//pm2 logs
//pm2 restart server => shutdown and start
//pm2 reload server => when server live and we wont users disconnection 
//pm2 show [id]
//pm2 start server.js -l logs.txt -i max