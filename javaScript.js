const changeTitle = function(newTitle){
    let title = document.getElementById('title')
    title.innerText = newTitle
}

const changePageBackground = function(newColor){
    let pageBackground = document.getElementById('body')
    pageBackground.style.backgroundColor = newColor
}

const changeAddress = function(newAdd){
    let address = document.getElementById('address')
    address.innerText = newAdd
}