// List
let todoItems = [];

// X button on the list rows 
const span = document.createElement("SPAN")
const dlt = document.createTextNode("\u00D7")
span.className = "close"
span.id = "delete"


// DOM
const list = document.querySelector('#list');


// Create list with DOM and add delete button. The task shows to user 
function renderTodo(todo) {
  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
  `

  // Add X button on the row
  span.appendChild(dlt)
  node.appendChild(span)

  // Success Message
  document.querySelector("#olm").innerHTML = "The item is added to the list"
  $(".success").toast("show");


  list.append(node);
}


// Entered task add the to the list when press the submit button
function newElement(e){
    //  e.preventDefault()
  
      var input = document.getElementById("task").value
      var text = input.trim()
  
      if(text !== '' ) {
          addTodo(text)
          input.value = ''
      //    input.focus()
      }
}


// Text add inside the object that has id,checked status and text 
function addTodo(text) {
    // Added item
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}