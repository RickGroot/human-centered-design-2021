// --------------------------------------------------------------------------------------- Global variables
let names = document.querySelectorAll('section>p>b')
let next = document.querySelectorAll('section>p.next')
let nameArr = []
let text = document.querySelectorAll('#podcast>section p:not(:nth-child(2))')
let explainText = document.getElementById('explain')
let index = -1
let alertUser

// --------------------------------------------------------------------------------------- Define left and right classes
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

// --------------------------------------------------------------------------------------- Add classes for texts that are connected
next.forEach(item => {
    let previous = item.previousSibling
    let previousClass = previous.className

    item.classList.add(previousClass)
    previous.classList.add('previous')
})

// --------------------------------------------------------------------------------------- Add left and right classes to text blocks
function addClass(item, name) {
    let parent = item.parentNode;

    if (name === 0) {
        parent.classList.add('left')
    } else if (name === 1) {
        parent.classList.add('right')
    }
}

// --------------------------------------------------------------------------------------- Give text display none when JS in enabled
for (let i = 0; i < text.length; i++) {
    text[i].classList.add('none')
}

// --------------------------------------------------------------------------------------- Show next text block on keypress
document.body.onkeyup = e => {
    if (e.keyCode == 32 || e.keyCode == 13 || e.keyCode == 39 || e.keyCode == 40) {
        index++
        text[index].classList.remove('none')
        window.scrollTo(0, document.body.scrollHeight) // scroll to bottom
        window.clearTimeout(alertUser) // stop alert text
        clearText() // clear alert text
        animate(text[index]) // animate mouths
    }
}

// --------------------------------------------------------------------------------------- Show animation on faces
function animate(text) {
    let left = document.querySelector('.speaker1')
    let right = document.querySelector('.speaker2')
    let resetTime = 2000

    if (text.classList.contains('left')) {
        left.classList.add('animate')

        setTimeout(() => left.classList.remove('animate'), resetTime)
    } else if (text.classList.contains('right')) {
        right.classList.add('animate')

        setTimeout(() => right.classList.remove('animate'), resetTime)
    }
}

// --------------------------------------------------------------------------------------- Explain input type after time
function timeInput() {
    alertUser = window.setTimeout(() => showText(), 15*1000)
}

function showText() {
    explainText.classList.remove('noexplain')
}

function clearText() {
    explainText.classList.add('noexplain')
}

explainText.addEventListener("click", () => {
    clearText()
})

explainText.addEventListener("touchstart", () => {
    clearText()
})

timeInput()