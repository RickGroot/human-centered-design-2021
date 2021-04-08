const {content, getLinks} = require('./getPodcast.js')

const home = async (req, res) => {
    let data = await getLinks()
    res.render('home', {
        title: 'Home',
        data: data
    })
}

const podcast = async (req, res) => {
    let urlData = req.params.year + "/" + req.params.month + "/" + req.params.day + "/" + req.params.podcast
    let data = await content(urlData)
    res.render('podcast', {
        title: 'Podcasts',
        text: data.text,
        header: data.header,
        aside: data.aside,
        intro1: data.intro1,
        intro2: data.intro2,
        blockquote: data.blockquote
    })
}

module.exports = {home, podcast}