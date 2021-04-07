const express = require('express')
const app = express()
const fibonacci=require('./fibonacci')

app.get('/', function (req, res) {
    res.send('Hello World')
})

/**
 * EXAMPLE URL http://localhost:3000/fibonacci?index=1 
 * returns fibonacci number on that index 
 */
app.get('/fibonacci', function (req, res) {
    try{
        let index=req.query.index;
        let number=fibonacci.getFibonacciNumber(index)
        let response={
            index:index,
            number:number
        }
        console.log(response)
        res.status(200).send(response)
    }catch(e){
        res.status(500).send(e)
    }
   
})


app.listen(3000)
console.log("API LISTENING ON PORT 3000")