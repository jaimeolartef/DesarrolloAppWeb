import ex from 'express'
import dir from 'path'
import data from './json/consult.json' assert { type: 'json' }
import fs from 'fs'

const app = ex();
const dir_front = dir.resolve();
app.use(ex.static("front/build"));
app.use(ex.json());


app.listen('8881', function () {
    console.log("Server started")
    console.log(dir_front)
})

app.get('/', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/register', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/consult', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/activity', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/activity/data', function (req, res) {
    const user = req.body;
    console.log(user);
    res.sendStatus(200);
})

app.get('/consult/data', function (req, res) {
    res.json(data)
})

app.post('/register/data', function (req, res) {
    const user = req.body;
    console.log(user);
    // Synchronous read
    const data = JSON.parse(fs.readFileSync(dir.resolve('./json/consult.json'), 'utf8'));

    // Asynchronous read
    fs.readFile(dir.resolve('./json/consult.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            const jsonData = JSON.parse(data);
            jsonData.push(user);
            fs.writeFile(dir.resolve('./json/consult.json'), JSON.stringify(jsonData), 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing file: ${err}`);
                } else {
                    console.log('File is written successfully!');
                }
            });
        }
    });

    res.sendStatus(200);
});