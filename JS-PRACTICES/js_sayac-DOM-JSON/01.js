let counter = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0;
let counterDOM = document.querySelector('#counter');
counterDOM.innerHTML= counter

let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')


increaseDOM.addEventListener('click', clickEvent)
decreaseDOM.addEventListener('click', clickEvent)


function clickEvent() {
    this.id == 'increase' ? counter += 1 : counter -= 1
    localStorage.setItem("count",counter)
    counterDOM.innerHTML = counter
}