let text ={key: "anahtar", texts:"asdasd", control:"Noice user" }
let textPlus ={...text,name:"ahmet"};
// destructurin işlemi yaprak benzer bir obje oluşturdum  
//let textPlus =text; // olarak atama yaparsam her bir değişim iki oluşumu da etkiler
// fakat burada destruction işlemi yaparak benzer fakat bağımsız objeler oluşturmayı kolaylaştırabiliriz.
console.log(textPlus);