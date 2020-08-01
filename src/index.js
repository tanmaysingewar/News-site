const express = require('express')
const newsSearch = require('./routes/search')
const homePageNews = require('./routes/homePageNews')
const covidData = require('./routes/covidData')
const catagoryData = require('./routes/catagoryData')

const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 5000
const path = require('path')

const publicDirectory = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './template/views')
const partialPath = path.join(__dirname, './template/partials')
hbs.registerPartials(partialPath)
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.render('index', {

    })
})

app.get('/homepage', (req, res) => {
    homePageNews((error, news) => {
        res.send({
            error: error,
            data: news
        })
    })
})

app.get('/news', (req, res) => {
    const q = req.query.search
    console.log(q)
    if (!q) {
        return res.send({
            error: "Search is not found"
        })
    }
    newsSearch(q, (error, news) => {
        res.send({
            error: error,
            data: news
        })
    })
})

app.get('/covidData', (req, res) => {
    covidData((error, data) => {
        res.send({
            error: error,
            data: data
        })
    })
})


app.get('/catagory', (req, res) => {
    const q = req.query.catagory
    console.log(q)
    if (!q) {
        return res.send({
            error: "Search is not found"
        })
    }
    catagoryData(q, (error, news) => {
        res.send({
            error: error,
            data: news
        })
    })
})

app.listen(port, () => {
    console.log('Server is running at ' + port)
})