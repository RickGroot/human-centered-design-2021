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

let home = document.getElementById('overview')
let homeLink = document.querySelector('#podcast>a')
let aside = document.querySelector('#podcast>aside')

if (btn1) {
    btn1.addEventListener('click', e => {
        e.preventDefault()
        homeLink.classList.remove('class2')
        aside.classList.remove('class2')

        btn1.classList.add('active')
        btn2.classList.remove('active')
    })
}

if (btn2) {
    btn2.addEventListener('click', e => {
        e.preventDefault()
        homeLink.classList.add('class2')
        aside.classList.add('class2')

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