let names = document.querySelectorAll('section>p>b')
let next = document.querySelectorAll('section>p.next')
let nameArr = []

names.forEach(name => {
    let person = name.innerText.charAt(0)
    if (nameArr.includes(person)) {
        let arrPosition = nameArr.indexOf(person)
        addClass(name, arrPosition)
    } else {
        nameArr.push(person)
        let arrPosition = nameArr.indexOf(person)
        addClass(name, arrPosition)
    }
})

next.forEach(item => {
    let previous = item.previousSibling
    let previousClass = previous.className

    item.classList.add(previousClass)
    previous.classList.add('previous')
})


function addClass(item, name) {
    let parent = item.parentNode;

    if (name === 0) {
        parent.classList.add('left')
    } else if (name === 1) {
        parent.classList.add('right')
    }
}


let btn1 = document.getElementById('option1')
let btn2 = document.getElementById('option2')
let btn3 = document.getElementById('option3')
let btn4 = document.getElementById('option4')
let btn5 = document.getElementById('option5')
let btn6 = document.getElementById('option6')
let btn7 = document.getElementById('option7')
let btn8 = document.getElementById('option8')
let btn9 = document.getElementById('option9')

let home = document.getElementById('overview')
let homeLink = document.querySelector('#podcast>a')
let aside = document.querySelector('#podcast>aside')
let articleHeader = document.getElementById('articlehead')
let text = document.querySelectorAll('#podcast>section p:not(:nth-child(2))')

if (btn1) {
    btn1.addEventListener('click', e => {
        e.preventDefault()
        articleHeader.classList.remove('header2')
        // aside.classList.remove('class2')

        btn1.classList.add('active')
        btn2.classList.remove('active')
    })
}

if (btn2) {
    btn2.addEventListener('click', e => {
        e.preventDefault()
        articleHeader.classList.add('header2')
        // aside.classList.add('class2')

        btn1.classList.remove('active')
        btn2.classList.add('active')
    })
}

if (btn3) {
    btn3.addEventListener('click', e => {
        e.preventDefault()

        let left = document.querySelectorAll('.left')
        let right = document.querySelectorAll('.right')

        left.forEach(cont => {
            cont.classList.remove('left2')
        })

        right.forEach(cont => {
            cont.classList.remove('right2')
        })

        btn4.classList.remove('active')
        btn3.classList.add('active')
    })
}

if (btn4) {
    btn4.addEventListener('click', e => {
        e.preventDefault()

        let left = document.querySelectorAll('.left')
        let right = document.querySelectorAll('.right')

        left.forEach(cont => {
            cont.classList.add('left2')
        })

        right.forEach(cont => {
            cont.classList.add('right2')
        })

        btn3.classList.remove('active')
        btn4.classList.add('active')
    })
}

if (btn5) {
    btn5.addEventListener('click', e => {
        e.preventDefault()
        home.classList.remove('home2')
        // aside.classList.remove('class2')

        btn5.classList.add('active')
        btn6.classList.remove('active')
    })
}

if (btn6) {
    btn6.addEventListener('click', e => {
        e.preventDefault()
        home.classList.add('home2')
        // aside.classList.add('class2')

        btn5.classList.remove('active')
        btn6.classList.add('active')
    })
}

if (btn7) {
    btn7.addEventListener('click', e => {
        e.preventDefault()

        for (let i = 0; i < text.length; i++) {
            text[i].classList.add('none')
            showTimer(i)
        }

        btn7.classList.add('active')
        btn8.classList.remove('active')
        btn9.classList.remove('active')
    })
}

if (btn8) {
    btn8.addEventListener('click', e => {
        window.location.reload()
        e.preventDefault()

        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove('none')
        }

        btn7.classList.remove('active')
        btn8.classList.add('active')
        btn9.classList.remove('active')
    })
}

if (btn9) {
    btn9.addEventListener('click', e => {
        e.preventDefault()
        btn9.blur()

        for (let i = 0; i < text.length; i++) {
            text[i].classList.add('none')
        }

        let index = -1

        document.body.onkeyup = e => {
            if(e.keyCode == 32 || e.keyCode == 13 || e.keyCode == 39 || e.keyCode == 40){
                index++
                text[index].classList.remove('none')
                window.scrollTo(0,document.body.scrollHeight)
            }
        }

        btn7.classList.remove('active')
        btn8.classList.remove('active')
        btn9.classList.add('active')
    })
}

function showTimer(i) {
    let time = (i * 8000) + (text[i].innerHTML.length * 10)

    if (i===0) {
        time = 0
    }

    setTimeout(function () {
        text[i++].classList.remove('none')
        window.scrollTo(0,document.body.scrollHeight)
        // console.log(time)
    }, time);
}