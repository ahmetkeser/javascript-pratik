
        /* METİNSEL ARAMA */
/********************************* */
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()
/********************************** */
//// String indexOf()  dizedeki istenen kelimenin başlangıç indexini verir
//aranan metin bulunamazsa -1 değeri döndürür !!!
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
tasiN(index,text);
function tasiN (text1,text2) {
    
   let carry =document.createElement("p")
   carry.textContent=text2+"  --> Bulunduğu dizenin başlangıç indexi: "+text1
   document.getElementById("liStart").appendChild(carry)
}

/************************************* */
//// String lastIndexOf() dizedeki aranacak kelimenin başlangıç indisini verir
//aranan metin bulunamazsa -1 değeri döndürür !!!
// Bu aramaya TERSTEN başlar o yüzden cümlenin sonundaki
//locateyi görür VE BAŞLANGIÇ İNDİSİNİ VERİR **** DİKKAT!
let Newtext = "Please locate where 'locate' occurs!";
let Newindex = Newtext.lastIndexOf("locate");
tasi(Newindex,Newtext);
function tasi (text1,text2) {

   let carry =document.createElement("p")
   carry.textContent=text2+"  --> Bulunduğu dizenin bitiş indexi: "+text1
   document.getElementById("liStart").appendChild(carry)
}

//DİĞER BİR YÖNTEM
// aramaya 15. idndisten sonra başla ve 15-16-17 devam et 
// aradığım kelimenin ilk indisini ver
console.log(Newtext.indexOf("locate",15));

console.log(Newtext.lastIndexOf("locate",15)) // AYNISINI lastIndexOf ile yaparsak
// TERSTEN sayacağı için bu sefer baştaki location yazısının indisini verir.

/************************************* */
// String search()
//indexOf ile aynı sonucu veriyor gibi ama DEĞİL indexof güçlü aramalar yapar
console.log(Newtext.search("locate")) // 7 sonucunu vericek
/************************************* */
// String match()
// dizi içersindeki ain varmı yokmu kontrol eder
// !!!!   g tagı ile birden fazla ise adedini verir
let lastText = "The rain in SPAIN stays mainly in the plain";
let Arry=lastText.match("ain")
console.log(lastText)
console.log("ilk bulduğu ain indisini verir "+Arry+"--->"+Arry.index)
let ArryAll = lastText.match(/ain/g)
console.log("aranan ain dizede kaç tane ise alır dizi oluşturur-->"+ArryAll+ArryAll.length)