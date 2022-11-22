
var tasks = []
const get_list = document.querySelector('#list')
var my_list = document.getElementsByTagName("LI")

// Aşağıda listedeki datalar localstorage'a eklendi.
// her satır sonuna X işareti eklendi. Hardcode'daki değerler için yapıldı.
for (var i=0; i < my_list.length; i++ ) {
    
    // localstorage
    tasks.push(my_list[i].innerHTML)
    console.log(tasks)
    localStorage.setItem("list",JSON.stringify(tasks))

    // satır sonuna close butonu
    var span = document.createElement("SPAN")
    var dlt = document.createTextNode("\u00D7")

    span.className = "close"
    span.id = "delete"
    span.appendChild(dlt)
    my_list[i].appendChild(span);
    my_list[i].classList.add("check")

}




// Buton, text ve liste tanımlandı ardında text alanından girilen değer buton yardımıyla listeye eklendi.
// Daha düzgün yapılacak

/*
let task = document.getElementById('task')
let get_task = document.getElementById('list')
let add_button = document.getElementById('liveToastBtn')
add_button.addEventListener('click', add_task)

function add_task (){

    if( task.value == ""){
        alert("Alan boş bırakılamaz !!")
    }

    else {
        let li = document.createElement('li')

        // örnek kullanım  <input id="${todo.id}" type="checkbox"/> <label for="${todo.id}" class="tick js-tick"></label> <span>${todo.text}</span>  <button class="delete-todo js-delete-todo">  <svg><use href="#delete-icon"></use></svg> </button>
        li.innerHTML = `${task.value}  <button id="iconForDelete" class="btn btn-outline-secondary"><i class="bi bi-x-circle-fill"></i></button>`
    
        // i elementini seçerek i değişkenine ata
        let i = document.createElement("i");
            
        // i değişkenine class ataması yap
        i.classList = "fas fa-times";
     
        // Appen <button id="iconForDelete" class="btn btn-outline-secondary"><i class="bi bi-x-circle-fill"></i></button>
        // i değişkenini li değişkenine ekleme
        li.appendChild(i);
     
        // li değişkenini görev listesi kısmına ekleme
        get_task.appendChild(li);
    }

}
*/