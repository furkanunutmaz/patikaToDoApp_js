/*

1. Adım
    -> buton aktifleştirilecek
    -> array içerisinde loop yapacak
    -> DOM işlemi uygulanacak
    -> localstorage'da veri tutucak

2. Adım 
    -> Listeye boş karakter eklenemeyecek
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
const add_button = document.getElementById('liveToastBtn')

add_button.addEventListener('click', add_task)

function add_task (){

    if( task.value == ""){
        alert("Alan boş bırakılamaz !!")
    }

    else {
        let li = document.createElement('li')

        li.innerText = task.value
    
        // i elementini seçerek i değişkenine ata
        var i = document.createElement("i");
            
        // i değişkenine class ataması yap
        i.classList = "fas fa-times";
            
        // i değişkenini li değişkenine ekleme
        li.appendChild(i);
     
        // li değişkenini görev listesi kısmına ekleme
        get_task.appendChild(li);
    }

}