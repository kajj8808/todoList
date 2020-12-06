const colorArray = ["#f1c40f", "#3498db", "#8e44ad"];

function init() {
    document.body.innerHTML = "<h1>Hello!</h1>"
    const title = document.querySelector('h1');
    title.style.color = "#ffff"
}

function resized() {
    const width = window.innerWidth
    if (width > 1200) {
        document.body.style.background = colorArray[0]
    } else if (width > 700 && width < 1200) {
        document.body.style.background = colorArray[2]
    } else {
        document.body.style.background = colorArray[1]
    }
}

init()
resized()
window.addEventListener("resize", resized);
