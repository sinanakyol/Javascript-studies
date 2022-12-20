let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandle)

let alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`

function formHandle(event) {
    event.preventDefault()
    const USERNAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');

    if(USERNAME.value && SCORE.value){
        addItem(USERNAME.value, SCORE.value)
        USERNAME.value = ""     //Gönderdikten sonra sıfırlama
        SCORE.value = ""        //Gönderdikten sonra sıfırlama
    } else {
        alertDOM.innerHTML = alertFunction(
            "HATA!", "Eksik bilgi girdiniz.","danger"
        )
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.appendChild(liDOM)
}