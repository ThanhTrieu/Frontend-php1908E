// khai bao ham trong js
// cu phap : function + nameFunction (params...)
function sumNumber(a,b, c= 5) {
	// function: keyword
	// sumNumber: ten ham do LTV dinh nghia
	return a + b + c;
	// return : keyword => tra ket qua ve cho ham
	// khi gap tu khoa return se thoat khoi ham - cac cau lenh ben duoi tu khoa return se ko dc thuc thi
	// tham so truyen vao ham khong can tu khoa khai bao bien (var, let, const)
}

// goi ham ra su dung
let kq = sumNumber(4, 7);
console.log(kq);

// viet ham tim BSCLN cua 4,5 tu 100 - 300;
function timBoiSoChungLonNhat(a,b, i,j){
	let max = 0;
	for(let  k = i; k <= j; k++){
		if(k % a == 0 && k % b == 0){
			max = k;
		}
	}
	return max;
}
// viet ham giai PTBH
function giaiPTBH(a,b,c) {
	let delta = b*b - 4*a*c;
	if(delta < 0){
		return false;
	} else if(delta == 0){
		return -b/(2*a);
	} else {
		x1 = 122;
		x2 = 212;
		return 'x=1' + x1 + ' va x2 =' + x2;
	}
}

let result = giaiPTBH(1,2,4);
if(!result){
	console.log('PT Vo nghiem');
} else {
	console.log('nghiem pt la' + result);
}
///////////////////////////////////////////////
let kiemTraChanLe = function(number){
	if(number % 2 == 0){
		return true;
	}
	return false;
}
let myNumber = 99;
if(kiemTraChanLe(myNumber)){
	console.log(myNumber + 'la so chan');
} else {
	console.log(myNumber + 'la so le');
}

let check = kiemTraChanLe(myNumber);
console.log(typeof kiemTraChanLe);

// viet ham theo loai nay : kiem tra 1 so xem co phai la so chinh phuong ko?
let kiemTraSoChinhPhuong = function(a){

	let number = Math.sqrt(a);
	if(number % 1 == 0){
		return true;
	}
	return false;
}

function tinhDienTichHinhThang(a,b,h){
	function tinhTong(){
		return a+b;
	}

	function phepNhan(){
		return tinhTong()*h;
	}

	function phepChia(){
		return phepNhan()/2;
	}

	function xemKetQua(){
		return phepChia();
	}

	return xemKetQua();
}
let  dt = tinhDienTichHinhThang(2,3,4);
////////////////////////////////////////////////////
// arrow function

let tinhChuViHinhTron = (r) => {
	const PI = 3.14;
	return 2*PI*r;
}

let cv = tinhChuViHinhTron(5);
console.log(cv);
//////////////////////////////////////////////////////
// let a = 10;
// a = 20;
/*
let n1 = prompt('moi nhap he so a ');
//n1 = Number.parseInt(n1);

let n2 = prompt('moi nhap he so b');
//n2 = Number.parseInt(n2);

let n3 = n1 + n2;
alert(n3);
console.log(typeof n1);
console.log(typeof n2);

if(Number.isInteger(n3)){
	console.log('OK');
} else {
	console.log('FAIL');
}
*/

let demo = 0/0;
console.log(demo);
if(Number.isNaN(demo)){
	console.log('Yes');
} else {
	console.log('No');
}

let myInfinity = 3/0;
console.log(myInfinity);











