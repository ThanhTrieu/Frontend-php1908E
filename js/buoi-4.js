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

// kiem tra so luong phan tu trong mang
// nameArray.length
console.log(myArr.length);
/////////////// duyet mang ///////////////////////////
let arrNumber = [1,2,3,4,5,6,7,8,9,10];
// 1 for
let countArr = arrNumber.length;
for (let i = 0; i < countArr; i ++) {
	console.log(i, arrNumber[i]);
}

// 2 forEach
// arrNumber.forEach(function(el , i){

// });

arrNumber.forEach( function(element, index) {
	// callback function
	console.log('key :' + index  + '- value : ' + element);
});

// viet ham tra ve mot mang toan so chan
function layRaSoChanTrongMang(arr)
{
	let newArr = []; // bien la mang rong
	/*
	arr.forEach(function(e, i){
		if(e % 2 == 0){
			// day phan tu vao cuoi mang
			newArr.push(e);
		}
	});
	*/
	let countArr = arr.length;
	for(let i = 0; i< countArr; i++){
		if(arr[i] % 2 == 0){
			newArr.push(arr[i]);
		}	
	}
	return newArr;
}

let res = layRaSoChanTrongMang(arrNumber);
console.log(res); // in ra 1 mang chua toan so chan

// 3 - for of
for(let j of arrNumber) {
	console.log(j);
}
/**************** Cac phuong thuc co ban lam viec voi mang *******/

let myArrNumber = [100,2,3,4,5,99,80];
console.log(myArrNumber);

// them 101 vao cuoi mang
myArrNumber.push(101);
console.log(myArrNumber);

// xoa phan tu o cuoi mang va tr ve phan tu do
let lastEl = myArrNumber.pop();
console.log(lastEl, myArrNumber);

// them phan vao dau mang
myArrNumber.unshift(lastEl);
console.log(myArrNumber);

// xoa di phan tu dau tien cua mang
let firstEl = myArrNumber.shift();
console.log(firstEl, myArrNumber);

// tim kiem phan tu nam trong mang
let pos = myArrNumber.indexOf(3);
console.log(pos);
let pos2 = myArrNumber.lastIndexOf(3);
console.log(pos2);

let exArr = [1,2,3,5,4,6,7,8];
// cho biet so 5 co nam trong mang ko ? neu co lay ra tat ca cac phan tu khac tu vi tro do cho den het mang, neu ko them so 5 vao giua mang => viet ham

let timKiemPhanTuTrongMang = (a, arr) => {
	// a co nam trong mang arr ko?
	let positon = arr.indexOf(a);
	if(positon == -1){
		// ko tim thay
		// them vao giua mang
		let lengArr = Math.ceil(arr.length/2);
		let newArray = [];
		for(let i = 0; i< lengArr; i ++){
			newArray.push(arr[i]);
		}

		newArray.push(a);

		for(let j = lengArr; j < arr.length; j++){
			newArray.push(arr[j]);
		}

		return newArray;
	} else {
		// tim thay
		let newArray = [];
		for(let j = positon; j < arr.length; j++) {
			newArray.push(arr[j]);
		}
		return newArray;
	}
}

let kq = timKiemPhanTuTrongMang(5, exArr);
console.log(kq);

// kiem tra co phai mang hay ko?
if(Array.isArray(kq)){
	console.log('OK');
} else {
	console.log('ERR');
}

let fruit = [100,1,5,9,4,7,6]; //['tao', 'cam', 'oi', 'le', 'man'];
/*
fruit.sort(function(b, a){
	return a-b;
});
console.log(fruit);
*/
function sapXepMang(arr)
{

	//sdsd
	/*
	for(let i = 0; i < arr.length; i++){
		for( let j = i; j < arr.length ; j++){
			if(arr[i] < arr[j]){
				let tg = arr[i];
				arr[i] = arr[j];
				arr[j] = tg;
			}
		}
	}
	*/
	//ddsd

	//console.log('AAAA')
	arr.forEach(function(e, i){
		arr.forEach(function(e1, j){
			console.log('i la : '+ i + ' - j la: ' + j);
			// if(arr[i] < arr[j]){
			// 	let tg = arr[i];
			// 	arr[i] = arr[j];
			// 	arr[j] = tg;
			// }
		});
	});
	//console.log('BBBB');
	///dsdsfdsfs
	
	return arr;
}
console.log(sapXepMang(fruit));

let ex2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// tinh trung binh cong cua cac so nguyen to trong mang
// viet ham

function kiemTraSoNguyenTo(a)
{
	if(a < 2){
		return false;
	}
	if(a == 2){
		return true;
	}

	let flag = true;
	for(let i = 2; i<= Math.sqrt(a); i++){
		if(a % i == 0){
			flag = false;
			break;
		}
	}
	return flag;
}

function tinhTrungBingCong(arr)
{
	let sum = 0;
	let count = 0;
	for(let i = 0; i< arr.length; i++){
		if(kiemTraSoNguyenTo(arr[i])){
			sum += arr[i];
			count++;
		}
	}

	return (sum/count);
}
let result2 = tinhTrungBingCong(ex2);
console.log(result2);
// viet ham tim so lon nhat va nho nhat trong mang
 

















