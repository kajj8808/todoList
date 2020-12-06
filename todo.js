const toDoForm = document.querySelector('.js_toDoForm')
const toDoInput = toDoForm.querySelector('input')
const toDoPendingList = document.querySelector('.js-toDoPendingList')
const toDoFinishedList = document.querySelector('.js-toDoFinishedList')

const PENDING_LS = 'PENDING'
const FINISHED_LS = 'FINISHED'

let toDosPending = new Array()
let toDosFinished = new Array()

const pending = {
    save : function(){
        localStorage.setItem(PENDING_LS , JSON.stringify(toDosPending))
    },
    load : function(){
        const loadToDos = localStorage.getItem(PENDING_LS)
        if(loadToDos !== null){
            const toDos = JSON.parse(loadToDos)
            toDos.forEach(function(toDo){
                pending.printToDo(toDo.text)
            })
        }
    },
    printToDo : function(text){
        const li = document.createElement("li")
        const delBtn = document.createElement("button")
        const againBtn = document.createElement("button")
        const span = document.createElement("span")
        const newId = toDosPending.length + 1  
        delBtn.innerHTML = "❌"
        delBtn.addEventListener("click" , pending.delete)
        againBtn.innerHTML = "✅"
        againBtn.addEventListener("click", pending.moveToFinished)
        span.innerHTML = text
        li.appendChild(delBtn)
        li.appendChild(againBtn)
        li.appendChild(span)
        li.id = newId
        toDoPendingList.appendChild(li)
        const toDoObj = {
            id : newId,
            text : text
        }
        toDosPending.push(toDoObj)
        pending.save()
    },
    delete : function(event){
        const btn = event.target
        const li = btn.parentNode
        toDoPendingList.removeChild(li)
        const cleanToDos = toDosPending.filter(function(toDos){return toDos.id !== parseInt(li.id)})
        toDosPending = cleanToDos
        pending.save() 
    },
    moveToFinished : function(event){
        const btn = event.target
        const li = btn.parentNode
        finished.printToDo(li.lastChild.innerHTML)
        toDoPendingList.removeChild(li)
        const cleanToDos = toDosPending.filter(function(toDos){return toDos.id !== parseInt(li.id)})
        toDosPending = cleanToDos
        pending.save() 
    }
}

const finished = {
    save : function(){
        localStorage.setItem(FINISHED_LS , JSON.stringify(toDosFinished))
    },
    load : function(){
        const loadToDos = localStorage.getItem(FINISHED_LS)
        if(loadToDos !== null){
            const toDos = JSON.parse(loadToDos)
            toDos.forEach(function(toDo){
                finished.printToDo(toDo.text)
            })
        }
    },
    printToDo : function(text){
        const li = document.createElement("li")
        const delBtn = document.createElement("button")
        const againBtn = document.createElement("button")
        const span = document.createElement("span")
        const newId =  toDosFinished.length + 1  
        delBtn.innerHTML = "❌"
        delBtn.addEventListener("click" , finished.delete)
        againBtn.innerHTML = "⏪"
        againBtn.addEventListener("click", finished.again)
        span.innerHTML = text
        li.appendChild(delBtn)
        li.appendChild(againBtn)
        li.appendChild(span)
        li.id = newId
        toDoFinishedList.appendChild(li)
        const toDoObj = {
            id : newId,
            text : text
        }
        toDosFinished.push(toDoObj)
        finished.save()
    },
    delete : function(event){
        const btn = event.target
        const li = btn.parentNode
        toDoFinishedList.removeChild(li)
        const cleanToDos = toDosFinished.filter(function(toDos){return toDos.id !== parseInt(li.id)})
        toDosFinished = cleanToDos
        finished.save()  
    },
    again : function(event){
        const btn = event.target
        const li = btn.parentNode
        console.log(li)
        pending.printToDo(li.lastChild.innerHTML)
        toDoFinishedList.removeChild(li)
        const cleanToDos = toDosFinished.filter(function(toDos){return toDos.id !== parseInt(li.id)})
        toDosFinished = cleanToDos
        finished.save()  
    }
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = toDoInput.value
    pending.printToDo(currentValue)
    toDoInput.value = ""
}

function init(){
    pending.load()
    finished.load()
    toDoForm.addEventListener("submit", handleSubmit)
}
init()





