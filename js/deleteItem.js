const get_list = document.querySelector('#list')
get_list.addEventListener("click", deleteandUpdateItem)

function deleteandUpdateItem (e){
    const item = e.target

    var aaaa = item.classList
    console.log(aaaa)
    
    // Aşapıdaki kod bloğunda eğer close class'ına basılırsa maddeyi silsin ve toastta göstersin
    if(item.classList[0] === "close") {
        document.querySelector("#olm").innerHTML = "Madde Silindi" 
        $(".success").toast("show")

        const dlt_item = item.parentElement
        dlt_item.remove() // Seçilen itemi siliyor
        localStorage.clear() // local tabledan bütün kayıtları uçuruyor. düzeltilmeli
    }

    // Eğer satırda çarpı butonu dışındaki yere basılırsa satırın üstünü çizecek ve başına tik işareti koyacak
    if(item.classList == "todo-item "){
        document.querySelector("#olm").innerHTML = "Checked"
        $(".success").toast("show");
        const select_item = item.parentElement
        select_item.classList.add('checked');
    }
}