//METİN PARÇALAMA İŞLEMLERİ 

            // slice(start, end)
            // substring(start, end)
            // substr(start, length)


document.getElementById('hstart').innerHTML="silice Dilimleme çalışması";


// id si ve içeğini alarak sayfaya ekleme yapar
function innerElement(sliceId,sliceAdd){            
document.getElementById(sliceId).innerHTML=sliceAdd;
}
let yazi
innerElement("pstart",yazi)
//********************************************************** */

// gelen text tanımlı yazıyı ulStart id li li tagına p elementi oluşturup yazıyı kaydeder
function addPBlock(text){
    let carryAdd= document.createElement("p")
    carryAdd.textContent=text
    let comeCarry =document.getElementById('liStart')
    comeCarry.appendChild(carryAdd)
}
addPBlock(yazi)
//*********************************************************** */
// slice(start, end) 0 dan başla end dahil değildir 
let strElements = "Apple, Banana, Kiwi";
addPBlock("silice(5,10) a dahil başla b dahil değil dizi mantığı 0 dan başla")
addPBlock("Apple, Banana, Kiwi")
addPBlock(strElements.slice(5,10))
addPBlock("---------------------------------------------------------------------")
addPBlock("silice(10) 10 dahil başla sonuna kadar yaz")
addPBlock("Apple, Banana, Kiwi")
addPBlock(strElements.slice(10))
addPBlock("---------------------------------------------------------------------")
addPBlock("silice(0,5) 0 dahil başla 5 (dahil değil) kadar yaz")
addPBlock("Apple, Banana, Kiwi")
addPBlock(strElements.slice(0,5))
addPBlock("---------------------------------------------------------------------")
addPBlock("silice(-12) dizinin sonundan saymaya başlar -12.eleman dahil değil")
addPBlock("Apple, Banana, Kiwi")
addPBlock(strElements.slice(-12))
addPBlock("---------------------------------------------------------------------")
addPBlock("silice(-12,-6) -12.eleman dahil değil, -6.eleman dahil")
addPBlock("Apple, Banana, Kiwi")
addPBlock(strElements.slice(-12,-6))

//*********************************************************** */
// substring(start, end)