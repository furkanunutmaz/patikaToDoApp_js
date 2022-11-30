const get_list = document.querySelector('#list')
get_list.addEventListener("click", deleteItem)

function deleteItem (e){
    const item = e.target

    // Aşapıdaki kod bloğunda eğer close class'ına basılırsa maddeyi silsin ve toastta göstersin
    if(item.classList[0] === "close") {
        document.querySelector("#olm").innerHTML = "Madde Silindi" 
        $(".success").toast("show")

        const dlt_item = item.parentElement
        dlt_item.remove() // Seçilen itemi siliyor
        localStorage.clear() // local tabledan bütün kayıtları uçuruyor. düzeltilmeli
    }
}
