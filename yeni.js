
debugger;// F10 ile adım adım takip edilebiliyor
let control = confirm("seçiminiz");
if (control==true){
    console.log("devamm")
}else{
    console.log("devam etmek istemedi tekrarsor") 
}
debugger;
location.reload(); // programı tekrar başlatır :D



   

let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
set.add(true);

let arr = [...set]; // destructuring

console.log(arr);

// Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]

let arr2 = [9, 15, "a string", {"objectKey": "objectValue"}];

let arr2converted = [...new Set(arr2)];

console.log(arr2converted);

// Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]

// Method 1   // tekrarlanan dizi elemanlarını ayıklar .!!!!

let users = ["John", "Murray", "Jane", "Jane", "Anne"];

function unique(users) {
        return Array.from(new Set(users));
}
console.log(users)
console.log(unique(users));

// Method 2

let sets = new Set(users);
let arrFromSet = [...sets];

console.log(arrFromSet);

// dizi ile set te yapılan aynı işlemlerin hızları ölçülüyor set daha ucuz!!
// let arr = [], set = new Set();
// let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

// for (let i = 0; i < users.length; i++) {
//   arr.push(users[i]);
//   set.add(users[i]);
// }

// let result;

// console.time('Array'); 
// result = arr.indexOf("Anne") !== -1; 
// console.timeEnd('Array');

// console.time('Set'); 
// result = set.has("Anne"); 
// console.timeEnd('Set');

