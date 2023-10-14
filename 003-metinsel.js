// .toUpperCase(); toLowerCase();Metni büyük küçük harf yapar
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // tüm karakterleri büyük harf yapar
console.log(text2)
console.log(text1.toLocaleLowerCase()); // tüm karakterleri küçük harf yapar
/*********************************************************** */
//.concat metne ekleme yapar
let metin1 ="Merhaba"
let metin2 ="Dünya"
let metin3 =metin1.concat("--->",metin2)
console.log(metin3)

// aynı işlemi bu şekilde yapabiliriz
console.log(metin1+"****"+metin2)

/************************************************************ */
// .trim()  dizenin her iki tarafındaki boşlukları kaldırır,
// başı ve sonunu baz alır orta boşluklara müdehale etmez

let text3 = "      Hello World!      ";
let text4 = text3.trim();
console.log("ilk lengt :",text3.length)
console.log(text4,text4.length)

/************************************************************* */
// .trimStart()
//yalnızca başındaki boşlukları kaldırır sonuna dokunmaz
let text5 = "      Hello World!      ";
console.log("ilk lengt :",text5.length)
let text6 = text5.trimStart();
console.log(text6,text6.length)

/************************************************************* */
// .trimEnd()
// Yalnızca dizenin sonundaki boşlukları kladırır
console.log("ilk lengt :",text5.length)
let text7 = text5.trimEnd();
console.log(text7,text7.length)

/************************************************************* */
// .padStart()
//kelimeyi başlangıcından itibaren istenen dolguyla doldurur
let text8= "5";
let text9 = text8.padStart(4,"0");
//toplam 4 karakter olana kadar başına 0 koyar
console.log(text9)

let numb = 5;
let textnumb = numb.toString(); // rakamları stringe dönüştürüp daha sonra işlem yapılmalı
let padded = textnumb.padStart(4,"0");
console.log(padded)
/************************************************************* */
// .padStart()
//kelimeyi sondan itibaren istenen dolguyla doldurur
let text10= "5";
let text11 = text10.padEnd(4,"0");
//toplam 4 karakter olana kadar başına 0 koyar
console.log(text11)
/************************************************************ */
// Dize karakterlerini çıkarmak için 3 yöntem vardır:
// charAt(position)
// charCodeAt(position)
// Property access [ ]

// ---- .charAt() Belirtilen dizindeki karakteri verir
let texts1 = "HELLO WORLD";
let char1 = texts1.charAt(0);
console.log(char1)

// ---- .charCodeAt() belirtilen karakterin unikodunu getirir
let texts2 = "HELLO WORLD";
let char2 = texts2.charCodeAt(0);
console.log(char2)
 // erişilmek istenen index numaralı karakteri getir
let char3 = text2[0];
console.log(char3)

/********************************************************** */
// Bir String'i Diziye Dönüştürme
// Bir dizeyle dizi olarak çalışmak istiyorsanız onu diziye dönüştürebilirsiniz.

// //   .split()  parçala
// text.split(",")    // virgül ile ayır
// text.split(" ")    // voşluk ile ayır
// text.split("|")    // Çizgi ile ayır
let textSplit = "Hello";
const myArr = textSplit.split(""); // karakterleri parçalar dizi haline getirir
console.log(myArr)
for(let i=0; i< myArr.length; i++){
    console.log(myArr[i])
}