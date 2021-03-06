const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS RELATED STUFF
app.use( '/static',  express.static('static'))
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG RELATED STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req,res)=>{
    const params = {}
    res.status(200).render('base.pug',params);
})


app.get('/contact', (req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})


//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})