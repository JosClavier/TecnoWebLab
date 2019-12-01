express = require('express')
let ejs = require('ejs')


app = express()

app.set('port', 1337)
app.listen(
    app.get('port'),
    () => console.log(`server listening on ${app.get('port')}`)
)

app.get('/', function (req, res) {
    res.send('description');
});

app.get('/hello/:name', function (req, res) {
    // res.send('button and ajax ' + req.params.name)
    res.render('hello.ejs', {name: req.params.name})
});

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');