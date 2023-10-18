console.log("başla")
let numbers=[];
let kontrol=[1,2,3,4,5,6,7,8,9] // eksik sayı kontrolü için oluşturulan dizi
function control(value){ // ! bu fonksiyon üretilen random dizi içersinde eksik sayıyı bulur
    for(let deger of kontrol){
        if(value.includes(deger)==false)
        {
            return deger;
        }
    }
}
function drive(){ // bu fonksiyon random 1 ile 9 arası sayı üretir
    let newNumber = Math.floor(Math.random()*9)+1;
    return newNumber;
}
for(let say=0;say<8;say++){
    let meetNumber=drive();
    if(numbers.includes(meetNumber)==false){ // üretilen sayının oluşturulan dizide kontrolünü yapar
        console.log("Bu dizimde mevcut değil <br> ekliyorum  : ",meetNumber);
        numbers.push(meetNumber)
        //debugger;
    }else{
        console.log("bu eleman mevcut",meetNumber,", bu beni etkilemez devamet <br> Yenisini arıyorum ...");
        //debugger;
        say--; //! başarısız denemelerin tekrarını sağlar.
    }
}

console.log(numbers);
console.log("aranan eksik sayı : ",control(numbers));

/********************************************************************************* */
