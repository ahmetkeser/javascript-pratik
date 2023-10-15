                        // let cizgi = {
                        //     altCizgi: "_",
                        //     Walk(){
                        //         //buraya fonksiyon gömebiliriz.
                        //     }
                        // };
                        // let domain = {
                        //     mail: "@gmail"
                            
                        // };
                        // domain.__proto__ = cizgi; // obje içersinde kalıtımı __proto__: cizgi şeklinde de verebiliriz.
                        // let firstName = "Ahmet"
                        // let lastName = "KESER"

                        // console.log(firstName+domain.altCizgi+lastName+domain.mail);

                        // let a ={x:100,y:200};
                        // let b =Object.create(a);
                        // b.p=300;
                        // b.q=400;
                        // console.log(b.x,b.y,b.p,b.q);



let genel ={
    ders1: "tütkçe",
    ders2: "matematik",
    ders3 : "tarih",
    ders4 : "sosyal bilimler"
}
let l1Ogrenci={
    __proto__ :genel,
    ders1: "sosyal bilimlere giriş",
    ders2: "oryantasyon"
}
let l2Ogrenci={
    ders1:"sosyoloji",
    ders2: "etkin beceri"
}
let l3Ogrenci={
    ders1: "ileri sosyoloji",
    ders2: "profosyonel beceri"
}

let sayisal ={
    __proto__ :genel,
    ders1: "geometri",
    ders2: "trigonometri",
    ders3: "üssel kavramlar"
}
let sayisalSon={
    ders1:"İleri Gemometri",
    ders2: "ileri Trigonometri",
    ders3: "Bilimsel Matematik"
}
let sozel ={
    __proto__:genel,
    ders1: "ülkeler tarihi",
    ders2: "derin tarih",
    ders3: "Tarihin İzi"
}
let sozelSon ={
    ders1: "Derin tarihi",
    ders2: "Bilimsel tarih"
}
let sor1 = prompt("kaçıncı sınıftasın : Çıkış için (4)");
    if (sor1 == 1)
    {
        let ogrenciNo = Object.create(genel)
        ogrenciNo=Object.create(l1Ogrenci)
        console.log("soru 1")
        console.log(ogrenciNo)
    }else if(sor1 == 4){
        console.log("durdurulacak")
        kontrol="x"
    }else if(sor1==2 || sor1==3){
        let sor2= prompt("Hangi bölümdesiniz (1) Sayısal (2) Sözel")
        if(sor1 ==2 && sor2 ==1){
            console.log("2/1")
            console.log(Object.create(l2Ogrenci))
            console.log(Object.create(sayisal))
        }else if(sor1 ==2 && sor2 ==2){
            console.log("2/2")
            console.log(Object.create(l2Ogrenci))
            console.log(Object.create(sozel))
        }else if(sor1==3 && sor2 ==1){
            console.log("3/1")
            console.log(Object.create(l3Ogrenci))
            console.log(Object.create(sayisalSon))
        }else if(sor1==3 && sor2 ==2){
            console.log("3/2")
            console.log(Object.create(l3Ogrenci))
            console.log(Object.create(sozelSon))
        }
    }else {
        console.log("yanlış giriş yaptın")
    }
console.log("işlem bitti")
