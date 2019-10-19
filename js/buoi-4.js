// dinh nghia mang
// mang 1 chieu
let myArr = new Array('cam', 'quyt', 'mit' , 'dua', 1,2,true, false);
let myArr2 = ['cam', 'quyt', 'mit' , 'dua', 1,2,true, false];

// mang da chieu
let myArr3 = [1,2,3, ['nam', 'nu'], ['cam', 'quyt', 'mit'], true, false];
let myArr4 = new Array(1, 2, 3, Array('nam', 'nu'), Array('cam', 'quyt', 'mit'), true, false);

console.log(myArr, myArr2, myArr3, myArr4);
// truy cap vao 1 phan tu nam trong mang
// nameArray[keyArray];
console.log(myArr[3]);
console.log(myArr4[4][2]);