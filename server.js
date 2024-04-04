import ex from  'express';
import dir from 'path';

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
    res.json(data)
})