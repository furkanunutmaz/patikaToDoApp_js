// List
let todoItems = [];

var my_list = document.getElementsByTagName("LI")

for (var i=0; i < my_list.length; i++ ) {
    
    // satır sonuna close butonu
    var span = document.createElement("SPAN")
    var dlt = document.createTextNode("\u00D7")

    span.className = "close"
    span.id = "delete"
    span.appendChild(dlt)
    my_list[i].appendChild(span);
    //my_list[i].classList.add("check")

}

// DOM
const list = document.querySelector('#list');


// Create list with DOM and add delete button. The task shows to user 
function renderTodo(todo) {    
  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  const item = document.querySelector(`[data-key='${todo.id}']`);


  node.setAttribute('class', `check ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
  `

  // Add X button on the row
  // X button on the list rows 
  const span = document.createElement("SPAN")
  const dlt = document.createTextNode("\u00D7")
  span.className = "close"
  span.id = "delete"
  span.appendChild(dlt)
  node.appendChild(span)


  // Success Message
  document.querySelector("#olm").innerHTML = "The item is added to the list"
  $(".success").toast("show");

      // If the item already exists in the DOM
  if (item) {
    // replace it
    list.replaceChild(node, item);
  } else {
    // otherwise append it to the end of the list
    list.append(node);
  }

  
}

// Entered task add the to the list when press the submit button
function newElement(e){
    //  e.preventDefault()
  
      var input = document.getElementById("task").value
      var text = input.trim()

    // Add Check process


      if(text !== '' ) {
          addTodo(text)
          input.value = ''
      //    input.focus()
      }
}


// Text add inside the object that has id,checked status and text 
function addTodo(text) {

  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo); 
  renderTodo(todo);
  localStorage.setItem("list",JSON.stringify(todoItems))
}



