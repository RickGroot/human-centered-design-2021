const fetch = require("node-fetch")
const jsdom = require("jsdom")
const {
    JSDOM
} = jsdom
const got = require('got');

//------------------------------------------------------------------------------> gets URL based on URL parameter
function getURL(param) {
    const URL = 'https://vasilis.nl/gbi/' + param
    return URL
}

//------------------------------------------------------------------------------> adds all fetched URL data to object
async function content(param) {
    let data = {}
    await got(await getURL(param)).then(res => {
        const dom = new JSDOM(res.body);
        const fetchedHTML = dom.window.document

        const text = fetchedHTML.getElementById('transcript').innerHTML
        const header = fetchedHTML.querySelector('#content div h2').innerHTML
        const aside = fetchedHTML.querySelector('aside div:first-child ul').innerHTML
        const intro1 = fetchedHTML.querySelector('#content div p:nth-child(2)').innerHTML
        const intro2 = fetchedHTML.querySelector('#content div p:nth-child(3)').innerHTML
        const blockquote = fetchedHTML.querySelector('blockquote').innerHTML

        data['text'] = text
        data['header'] = header
        data['aside'] = aside
        data['intro1'] = intro1
        data['intro2'] = intro2
        data['blockquote'] = blockquote

        return
    })

    return data
}

//------------------------------------------------------------------------------> gets all possible links
function getLinks() {
    const data = [{
        guest: "Jenny Shen",
        job: "Independant UX/Product Designer",
        date: "05-10-2018",
        year: 2018,
        month: 10,
        day: 05,
        url: "jenny-shen"
    },{
        guest: "Marjolijn Ruyg",
        job: "Web-pionier en docent",
        date: "12-07-2018",
        year: 2018,
        month: 07,
        day: 12,
        url: "marjolijn-ruyg"
    },{
        guest: "Rolf Coppens",
        job: "Creative Director bij Grrr",
        date: "11-06-2018",
        year: 2018,
        month: 06,
        day: 11,
        url: "rolf-coppens"
    },{
        guest: "Maaike de Laat",
        job: "Senior UX Designer bij Sile",
        date: "16-05-2018",
        year: 2018,
        month: 05,
        day: 16,
        url: "maaike-de-laat"
    },{
        guest: "Charis Rooda",
        job: "Conference organiser",
        date: "10-05-2018",
        year: 2018,
        month: 05,
        day: 10,
        url: "charis-rooda"
    },{
        guest: "Loes Bogers",
        job: "Onderzoeker, designer, docent, kunstenaar",
        date: "26-04-2018",
        year: 2018,
        month: 04,
        day: 26,
        url: "loes-bogers"
    },{
        guest: "Robert Jan Verkade",
        job: "Oprichter van Eend",
        date: "13-04-2018",
        year: 2018,
        month: 04,
        day: 13,
        url: "robert-jan-verkade"
    },{
        guest: "Qa’id Jacobs",
        job: "Product & System Designer",
        date: "19-03-2018",
        year: 2018,
        month: 03,
        day: 19,
        url: "qaid-jacobs"
    },{
        guest: "Dean Birkett",
        job: "User Experience Design Consultant",
        date: "05-03-2018",
        year: 2018,
        month: 03,
        day: 05,
        url: "dean-birkett"
    },{
        guest: "Marc Thiele",
        job: "Organiser of the Beyond Tellerrand Conference",
        date: "24-02-2018",
        year: 2018,
        month: 02,
        day: 24,
        url: "marc-thiele"
    },{
        guest: "Maarten P. Kappert",
        job: "Creative Consultant bij Mirabeau",
        date: "19-02-2018",
        year: 2018,
        month: 02,
        day: 19,
        url: "maarten-p-kappert"
    },{
        guest: "Peter Bilak",
        job: "Founder of Typotheque",
        date: "11-02-2018",
        year: 2018,
        month: 02,
        day: 11,
        url: "peter-bilak"
    },{
        guest: "Joost Faber",
        job: "Docent aan CMD Amsterdam",
        date: "30-01-2018",
        year: 2018,
        month: 01,
        day: 30,
        url: "joost-faber"
    },{
        guest: "Marije ten Brink",
        job: "Docent bij CMD in Amsterdam",
        date: "24-01-2018",
        year: 2018,
        month: 01,
        day: 24,
        url: "marije-ten-brink"
    },{
        guest: "Yuri Westplat",
        job: "Interaction Designer",
        date: "11-12-2017",
        year: 2017,
        month: 12,
        day: 11,
        url: "yuri-westplat"
    },{
        guest: "Jasper Kaizer",
        job: "Projectleider bij Q42",
        date: "26-11-2017",
        year: 2017,
        month: 11,
        day: 26,
        url: "jasper-kaizer"
    },{
        guest: "Astrid Poot",
        job: "Van de Familie van Fonk",
        date: "21-11-2017",
        year: 2017,
        month: 11,
        day: 21,
        url: "astrid-poot-2"
    },{
        guest: "Alper Cugun",
        job: "Design strateeg",
        date: "09-11-2017",
        year: 2017,
        month: 11,
        day: 09,
        url: "alper-cugun"
    },]

    return data
}


module.exports = {
    content,
    getLinks
}