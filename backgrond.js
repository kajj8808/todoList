const body = document.querySelector("body")

const IMG_NUMBER = 5;
/* 
function handleImgLoad(){
    console.log("finished loding!")
}
 */
function printImage(imgNumber){
    const image = new Image()
    image.src = `/image/${(imgNumber + 1) < 10 ? `0${imgNumber + 1}` : imgNumber + 1}.PNG`
    image.classList.add("bgImage")
    body.appendChild(image)
    
}

function genRandom(){
    //ceil 3.9 = 4 floor 3.9 = 3
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number
}

function init(){
    const randomNumber = genRandom()
    printImage(randomNumber)
}

init()