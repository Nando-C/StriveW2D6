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

const addCssClassToLink = function(newClass){
    let link = document.getElementsByTagName('a')
    for(i=0; i<link.length; i++) {
        link[i].classList.add(newClass)
    }
}

const toggleImgClass = function(){
    let image = document.getElementsByTagName('img')
    for(i=0; i<image.length; i++){
        image[i].classList.toggle('hideImg')
    }
}

let colorTheme = ['#568203', '#FF0800', '#3FFF00', '#F400A1', '#FF4500']
const colorPrice = function(){
    let price = document.querySelectorAll(`.price`)
    // console.log(price)
    for(i=0; i<price.length; i++){
        price[i].style.color = colorTheme[i]
    }
}