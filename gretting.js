const form = document.querySelector(".js_form")
const input = document.querySelector("input")
const greetings = document.querySelector('.js_greetings')
const user_LS = "currentUser"
const sowing_CN = "showing"
/* .greetings{
  display: none;
}

.showing{
  display: block;
} */
function saveName(text){
  localStorage.setItem(user_LS , text)
}

function handleSubmit(event){
  event.preventDefault()//이벤트막는거... 엔터누르면 새로고침되는거
  const currentValue = input.value
  paintGreeting(currentValue) 
  saveName(currentValue)
}

function askForName(){
  form.classList.add(sowing_CN) 
  form.addEventListener("submit" , handleSubmit)
}

function paintGreeting(text) {
  
    greetings.classList.add(sowing_CN)
    form.classList.remove(sowing_CN)
    greetings.innerHTML =  `Hello ${text}`
}
function loadName() {
    const currentUser = localStorage.getItem(user_LS)
    if(currentUser === null){
      askForName()    
    }else{
      paintGreeting(currentUser)
    }
}


function init() {
    loadName()
}


init()