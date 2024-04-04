import ex from  'express';
import dir from 'path';
import data from './json/consult.json' assert { type: 'json' }

const app = ex()
const dir_front = dir.resolve()
app.use(ex.static("front/build"))


app.listen('8881', function() {
    console.log("Server started")
    console.log(dir_front)
})

app.get('/', function(req, res){
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/register', function(req, res){    
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/consult', function(req, res){
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/consult/data', function(req, res){
    res.json(data)
})

app.post('/register/data', function(req, res){    
        console.log('aqui entro')
})