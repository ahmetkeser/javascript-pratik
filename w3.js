let strElements = "Apple, Banana, Kiwi";
document.getElementById('hstart').innerHTML="silice Dilimleme çalışması";



function innerElement(sliceId,sliceAdd){            // id si ve içeğini alarak sayfaya ekleme yapar
document.getElementById(sliceId).innerHTML=sliceAdd;
}
let yazi
innerElement("pstart",yazi)

function addPBlock(text){           // gelen text tanımlı yazıyı ulStart id li li tagına p elementi oluşturup yazıyı kaydeder
    let carryAdd= document.createElement("p")
    carryAdd.textContent=text
    let comeCarry =document.getElementById('ulStart')
    comeCarry.appendChild(carryAdd)
    
}
yazi ="asdasdsad"
addPBlock(yazi)