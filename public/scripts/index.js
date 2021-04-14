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