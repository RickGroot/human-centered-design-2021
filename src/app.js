const ejs = require('ejs')
const express = require('express');
const app = express()
const port = 7000;

const {home, podcast} = require('./server/render.js')

app
    .engine('.html', ejs.__express)
    .set('views', 'src/views')
    .set('view engine', 'html')
    .use(express.static('public'))
    .get('/', home)
    .get('/:year/:month/:day/:podcast', podcast)
    .get('*', error)

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found'
    })
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})