var message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
        let inputField = document.querySelector('input')

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    movieTitle.addEventListener('click',crossOffMovie)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener("click",deleteMovie)

    document.querySelector('ul').appendChild(movie)

    inputField.value = ''    
}

document.querySelector('form').addEventListener("submit",addMovie)

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = `${evt.target.previousSibling.textContent} has been deleted.`
    revealMessage()
}
const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked')) {
        message.textContent = `You've finished watching ${evt.target.textContent}`
    } else {
        message.textContent = `You still haven't watched ${evt.target.textContent}??`
    }
    revealMessage()
}
const hide = () => message.classList.add('hide');
const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(hide, 1000)
}