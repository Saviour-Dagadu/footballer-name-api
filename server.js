const express = require('express')
const { request, response } = require('express')
const app = express()
const PORT = 8000

    const footballer = {
        'ronaldo': {
        'age': 34,
        'birthName': 'Cristiano Ronaldo dos Santos Aveiro',
        'birthLocation':'Funchal, Madeira, Portugal'
        },
        'bruno': {
            'age': 34,
            'birthName': 'Bruno Miguel Borges Fernandes',
            'birthLocation':'Maia, Portugal'
            },
        'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation':'unknown'
        },
    }

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const footballerName = request.params.name.toLowerCase()
    if(footballer[footballerName]){
        response.json(footballer[footballerName])
    }else{
        response.json(footballer['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!, Better Go Catch It!`)
})