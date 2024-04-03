import ex from  'express';
import dir from 'path';

const app = ex()
const dir_front = dir.resolve()

app.listen('8881', function() {
    console.log("Server started")
})

app.get('/', function(req, res){
    res.sendFile(dir_front + "/front/build/index.js")
})