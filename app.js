// 46

// function tushuribQoldir(massiv, n) {
//     let tushurilganMassiv = massiv.slice(0, n);
//     return tushurilganMassiv;
// }

// let inputMassiv = [1, 2, 3, 4, 5];
// let tushurilganNatija = tushuribQoldir(inputMassiv, 3);

// console.log(tushurilganNatija);

// 49

// function almash(arr) {
//     return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4, 5]));

// 51
// function oshir1ga(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//       massiv[i] += 1;
//     }
//     return massiv;
//   }
//   console.log(oshir1ga([0,1,2,3,4]));

// 56

// function songiElement(arr) {
//     return arr[arr.length-1];
// }
// console.log(songiElement([1,2,3,4,5]));

// 62

// function arrayToString(arr) {
//     return arr.join("");
// }
// console.log(arrayToString([1,2,3,4,5]));

// 63
// function birlash(arr1, arr2) {
//     return arr1.concat(arr2)
//     }
//     console.log(birlash([1,2,3],[4,5,6]));

// 64

// function topIndex(arr, str) {
//     return arr.indexOf(str);
// }
// console.log(topIndex([1,2,3,4,5], 3));

// 65

// function arrElement(arr, index) {
//     return arr[parseInt(index)]
//     }
//     console.log(arrElement([1,2,3,4,5],9/3));

// 66

// function namuna(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }

//     return sum;
//   }
//   console.log(namuna([1,2,3,4,5]));


// Promptan ism, telefon raqam, manzil ma'lumotlari olinib console log ka object ko'rinishida chiqaring.

// function person(name, tel, address){
//     this.name = name;
//     this.tel = tel;
//     this.address = address;
// }

// const per = new person(
//     prompt("What your is name ?"),
//     prompt("what is your phone number ?"),
//     prompt("where are you from ?")
// )
// console.log(per);