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
})


function addClass(item, name) {
    let parent = item.parentNode;

    if(name === 0) {
        parent.classList.add('left')
    } else if (name === 1) {
        parent.classList.add('right')
    }
}


let btn1 = document.getElementById('option1')
let btn2 = document.getElementById('option2')
let btn3 = document.getElementById('option3')
let btn4 = document.getElementById('option4')

let homeLink = document.querySelector('#podcast>a')
let aside = document.querySelector('#podcast>aside')

btn1.addEventListener('click', e => {
    e.preventDefault()
    homeLink.classList.remove('class2')
    aside.classList.remove('class2')
})

btn2.addEventListener('click', e => {
    e.preventDefault()
    homeLink.classList.add('class2')
    aside.classList.add('class2')
})

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
})

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
})