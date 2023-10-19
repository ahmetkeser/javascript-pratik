// let metin="ahmet abiler bu gün ahmetlerle gezdi. ahmet caminin önünde okuduğu gazetede ahmet askerde film resmini gördü";
// console.log(metin.match(/ahmet/g));
// let tut = metin.match(/ahmet/g).length;
// console.log(tut)
// console.log(typeof(tut))
// let ymetin=[metin];

// for(let i =1;i<=tut;i++){
//    ymetin[i]=ymetin[i-1].replace("ahmet","yasin");
// }
// console.log(ymetin);

// Burada metin içersinde değiştirmek istediğim kelimenin cümle içersinde
// kaç defa geçtiğini bulduktan sonra adet sayısı kadar replace yaptırdım ve 
// Aşağıdaki satırda bunu replace /g tagı ile yapabiliyoruz.
// console.log(metin)
// let sonmetin=metin.replaceAll(/ahmet/g,"Deniz")
// console.log(sonmetin)
/*********************************************** */
// console.time();
// let dizi=new Array(8);
// console.log(dizi.length)
// console.log("Başla");
// let kontrol=0
// for(;;){
//     let r = Math.floor(Math.random()*9)+1;

//     if(dizi.indexOf(r)== -1 && kontrol!=9){// time 0.4951171875 ms
    //if(dizi.includes(r)== false && kontrol!=9){    //0.737060546875 ms
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
// console.timeEnd(); // 0.737060546875 ms
/******************************************************** */
//                         console.time()
//                         let dizi = new Array(8);
//                         console.log(dizi.length);
//                         console.log("Başla");
//                         let kullanilanElemanlar = [];
//                         for (let kontrol = 0; kontrol < 9; kontrol++) {
//                             let r = Math.floor(Math.random() * 9) + 1;

//                             if (!kullanilanElemanlar.includes(r)) {
//                                 for (let i = 0; i < dizi.length; i++) {
//                                     if (dizi[i] === undefined) {
//                                         dizi[i] = r;
//                                         kullanilanElemanlar.push(r);
//                                         console.log("eleman eklendi :" + r);
//                                         break;
//                                     }
//                                 }
//                             }
//                             if (kullanilanElemanlar.length === 8) {
//                                 break;
//                             }
//                         }
//                         console.log(dizi);
// console.timeEnd();//default: 0.58984375 ms

                        //************    1         ********* */
// console.time()
// console.log("Başla");
// let istenen = [];

// for (let kontrol = 0; kontrol < 8;) {
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
// console.timeEnd(); //default: 0.652099609375 ms
                            //************    2         ********* */
// console.time();
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
// console.timeEnd();  //0.791259765625 ms
/********************************************************* */
// let numbers=[];
// while(numbers.length<8){
//     let randNumber = Math.floor(Math.random()*9)+1;
//     if(numbers.indexOf(randNumber)==-1){
//         numbers.push(randNumber)
//         console.log(randNumber);
//     }
//     console.log(numbers.length);
// }
// console.log(numbers);
/******************************************************* */

let numbers=[],tut=0,say=0;
function randNumber(){
    let number = Math.floor(Math.random()*9)+1;
    return number;
}
function arrayControl(caseNumber){
    if(numbers.includes(caseNumber)== true)
    {
        console.log("pass");
        return 10;
    }else{
        numbers.push(caseNumber);
        console.log("add :",caseNumber);
        return caseNumber;
    }
}
while(numbers.length<8){
    console.log("Döngü sayısı :",say++);
    switch( tut=randNumber()){
        //console.log("switce giren sayı",tut)
        case 1:
            arrayControl(1);
            break;
        case 2:
            arrayControl(2);
            break;
        case 3:
            arrayControl(3);
            break;
        case 4:
            arrayControl(4);
            break;
        case 5:
            arrayControl(5);
            break;
        case 6:
            arrayControl(6);
            break;
        case 7:
            arrayControl(7);
            break;
        case 8:
            arrayControl(8);
            break;
        case 9:
            arrayControl(9);
            break;
        case 0:
            break;
        default:
            console.log("geçersiz değer")
            break;

    }
}
console.log(numbers)