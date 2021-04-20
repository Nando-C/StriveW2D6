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

const colorPrice = function(){
    let price = document.querySelectorAll(`.price`)
    
    for(i=0; i<price.length; i++){
        price[i].style.color = getRandomColor()
    }
}

const getRandomColor = function() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

//   ALTERNATIVE way to generate a random color
//   const getRandomColor = function() { 
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//      }
//     return color;
//   }