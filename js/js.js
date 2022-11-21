/*

1. Adım
    -> buton aktifleştirilecek -> Tamamlandı
    -> DOM işlemi uygulanacak
    -> localstorage'da veri tutucak

2. Adım 
    -> Listeye boş karakter eklenemeyecek -> Tamamlandı
    -> Tamamlandı işareti koyulabilecek
    -> çarpıyla silme işlemi koyulabilecek
    -> Toast(bootstrap) ile hata verecek
    -> bootstrap tasarımı eklencek

*/


/*

// LOOP'a data ekleme aşağıdaki gibi olacak 

let item = [""]

const add_item = document.querySelector('list')

for (index = 0; index < item.length; index++){
    const liDom = document.createElement('li')
    liDom.innerHTML = item[index]
    add_item.appendChild('liDom')
}

*/


// Buton, text ve liste tanımlandı ardında text alanından girilen değer buton yardımıyla listeye eklendi.
// Daha düzgün yapılacak


let task = document.getElementById('task')
let get_task = document.getElementById('list')
let add_button = document.getElementById('liveToastBtn')
let delete_button = document.getElementById('iconForDelete')

add_button.addEventListener('click', add_task)
get_task.addEventListener('click', delete_task)

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

// DELETE FUNCTION
/*

            // Declaring a variable to get select element
            var a = document.getElementById("list");
            var candidate = document.getElementById("candidate");
            var item = document.getElementById(candidate.value);
            a.removeChild(item);
*/

function delete_task(){

    let delete_item = document.getElementById(delete_button.value)
    delete_button.removeChild(delete_item)
}

