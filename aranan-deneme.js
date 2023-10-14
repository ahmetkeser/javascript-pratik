let metin="ahmet abiler bu gün ahmetlerle gezdi. ahmet caminin önünde okuduğu gazetede ahmet askerde film resmini gördü";
console.log(metin.match(/ahmet/g));
let tut = metin.match(/ahmet/g).length;
console.log(tut)
console.log(typeof(tut))
let ymetin=[metin];

for(let i =1;i<=tut;i++){
   ymetin[i]=ymetin[i-1].replace("ahmet","yasin");
}
console.log(ymetin);

// Burada metin içersinde değiştirmek istediğim kelimenin cümle içersinde
// kaç defa geçtiğini bulduktan sonra adet sayısı kadar replace yaptırdım ve 
// Aşağıdaki satırda bunu replace /g tagı ile yapabiliyoruz.
console.log(metin)
let sonmetin=metin.replaceAll(/ahmet/g,"Deniz")
console.log(sonmetin)

// let dizi=new Array(8);
// console.log(dizi.length)
// console.log("Başla")
// let kontrol=0
// for(;;){
//     let r = Math.floor(Math.random()*9)+1;

//     if(dizi.includes(r)== false && kontrol!=9){
//         dizi[kontrol]=r;
//         console.log("eleman eklendi :"+r);
//         kontrol ++;
//         if(dizi.includes(undefined)==false){
//             break;
//         }
//     }else{
//         break;
//     }
// }
// console.log(dizi);
                        // let dizi = new Array(8);
                        // console.log(dizi.length);
                        // console.log("Başla");
                        // let kullanilanElemanlar = [];
                        // for (let kontrol = 0; kontrol < 9; kontrol++) {
                        //     let r = Math.floor(Math.random() * 9) + 1;

                        //     if (!kullanilanElemanlar.includes(r)) {
                        //         for (let i = 0; i < dizi.length; i++) {
                        //             if (dizi[i] === undefined) {
                        //                 dizi[i] = r;
                        //                 kullanilanElemanlar.push(r);
                        //                 console.log("eleman eklendi :" + r);
                        //                 break;
                        //             }
                        //         }
                        //     }
                        //     if (kullanilanElemanlar.length === 8) {
                        //         break;
                        //     }
                        // }
                        // console.log(dizi);


                        //************    1         ********* */

console.log("Başla");
let istenen = [];

for (let kontrol = 0; kontrol < 8;) {
    let r = Math.floor(Math.random() * 9) + 1;

    if (istenen.indexOf(r) === -1) { //bu elemanı istenen dizisinde bulamazsa girer
       istenen[kontrol]=r;
        kontrol++;                  // kontrolü bir artırır
        console.log("eleman eklendi :" + r);
    }else if(kontrol ==8){
        for(let i =1;i<9;i++){
            if(istenen.indexOf(i)==-1){
                console.log("kaçak eleman : ", i)
            }
        }
        break;
    }
    
}

console.log(istenen);
                            //************    2         ********* */
// console.log("Başla");
// let istenen = [];
// let kontrol=0;

// for (;;) {
//     let r = Math.floor(Math.random() * 9) + 1;

//     if (istenen.indexOf(r) === -1) { //bu elemanı istenen dizisinde bulamazsa girer
//        istenen[kontrol]=r;
//         kontrol++;                  // kontrolü bir artırır
//         console.log("eleman eklendi :" + r);
//     }else if(kontrol ==8){
//         for(let i =1;i<9;i++){
//             if(istenen.indexOf(i)==-1){
//                 console.log("kaçak eleman : ", i)
//             }
//         }
//         break;
//     }
// }

// console.log(istenen);