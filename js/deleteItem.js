

const get_list = document.querySelector('#list')
get_list.addEventListener("click", deleteandUpdateItem)

function deleteandUpdateItem (e){
    const slctitem = e.target
    var aaaa = slctitem.classList
    console.log(aaaa)
    
    // Aşapıdaki kod bloğunda eğer close class'ına basılırsa maddeyi silsin ve toastta göstersin
    if(slctitem.classList[0] === "close") {
        document.querySelector("#olm").innerHTML = "Madde Silindi" 
        $(".success").toast("show")

        const dlt_item = slctitem.parentElement
        dlt_item.remove() // Seçilen itemi siliyor
        localStorage.clear() // local tabledan bütün kayıtları uçuruyor. düzeltilmeli
    }

    // Eğer satırda çarpı butonu dışındaki yere basılırsa satırın üstünü çizecek ve başına tik işareti koyacak
    console.log(slctitem.classList)
    if(slctitem.classList == "check "){
        document.querySelector("#olm").innerHTML = "Checked"
        $(".success").toast("show");
        slctitem.classList.toggle('checked');

    }
}