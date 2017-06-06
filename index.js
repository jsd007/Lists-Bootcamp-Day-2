const listForm = document.querySelector('form#listForm')
const promoteToggle = document.querySelectorAll('#promote')
const deleteToggle = document.querySelectorAll('#delete')

function handleSubmit(ev){
    ev.preventDefault()

    const list = document.querySelector('#list')
    const f = ev.target
    const item = f.itemName.value
    
    list.insertBefore(renderListItem(item), list.firstChild)
}

function deleteItem(ev){
    const b = ev.target
    const p = b.parentNode
    p.parentNode.removeChild(p)
}

function promoteItem(ev){
    const b = ev.target
    b.textContent = 'X'
    b.addEventListener('click', depromoteItem)
    b.parentElement.style.backgroundColor = 'red'
}

function depromoteItem(ev){
    const b = ev.target
    b.textContent = '*'
    b.addEventListener('click', promoteItem)
    b.removeEventListener('click', depromoteItem)
    b.parentElement.style.backgroundColor = 'white'
}

//show list
function renderListItem(value){
    const li = document.createElement('li')
    li.textContent = `${value}`
    const b1 = document.createElement('button')
    b1.textContent = '*'
    li.appendChild(b1)
    const b2 =document.createElement('button')
    b2.textContent = 'Delete'
    li.appendChild(b2)
    b1.addEventListener('click', promoteItem)
    b2.addEventListener('click', deleteItem)
    return li
}

//add promotion
for(var i = 0; i < promoteToggle.length; i++){
    promoteToggle[i].addEventListener('click', promoteItem)
}

//removes item from list
for(var i = 0; i < deleteToggle.length; i++){
    deleteToggle[i].addEventListener('click', deleteItem)
}

listForm.addEventListener('submit', handleSubmit)