// replace("text","New text")
// çalıştığı dizeyi değiştirmez yeni dize oluşumlarına yardımcı olur.

let text ="lorem ipsum"
let newText=text.replace("ipsum","change text")
console.log(text)
console.log(".replace(\"ipsum\",\"change text\"\) değişen yazı :",newText)
console.log("------------------------")

let text2 ="Please visit Microsoft and Microsoft!"
console.log(text2)
let newText2=text2.replace("Microsoft","W3Schools")
console.log("Burada iki adet microsoft yazısı vardır ve ilk gördüğünü değiştirir")
console.log("Büyük ve küçük harflere duyarlıdır")
console.log(".replace\(\"Microsoft\",\"W3Schools\"\) değişen yazı :",newText2)
// 
// Büyük küçük harf duyarlılığını ortadan kaldırmak için /i tagı kullanılır
let newText3 =text2.replace(/MICROSOFT/i,"w3scrool")
console.log(newText3)

// Tüm eşleşenleri değiştirmek için /g tagını kullan
let metinson ="ahmet abiler ahmetlerle ahmetlere gidicek"
let tasi=metinson.replace(/ahmet/g,"Yasin")
console.log(tasi)

// .reaplaceAll("değişmesi istenen","yerine gelecek değer")
// tüm gördüğü şarta uyan değerleri değiştirir
// 2021 de gelen bir özelik Explorerde ÇALIŞMIYOR!!!

let tasi2=metinson.replaceAll("ahmet","KADİR")
console.log(tasi2)

let tasi3=metinson.replaceAll(/ahmet/g,"Deniz")
console.log(tasi3)