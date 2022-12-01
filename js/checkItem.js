// Select the entire list
const chlist = document.querySelector('#list');
// Add a click event listener to the list and its children
chlist.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});


function toggleDone(key) {
    // findIndex is an array method that returns the position of an element
    // in the array.
    const index = todoItems.findIndex(item => item.id === Number(key));
    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
  }