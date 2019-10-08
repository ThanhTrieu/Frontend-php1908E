// cu phap comment tren 1 dong cua js
/*
cu phap comment
tren nhieu dong
cua js
 */
// ghi noi dung ra ngoai trang html
document.write('<h2>hello word</h2>');
//document.write('<script>alert("Hello")</script>');
//tao 1 hop thoai thong bao (messages)
//alert('Hello PHP1908E');
//var name = prompt('moi nhap ho ten');
// hien thi noi dung ra ngoai tool debug cua browser
//console.log(name);

/*************** Kieu du lieu trong JS ***************/

var number = 10;
console.log(typeof(number));
// kieu du lieu cua bien number
// var tu khoa khai bao bien

var PI = 3.14;
console.log(typeof(PI));

var myName = 'LPHP1908E';
console.log(typeof(myName));

var myMoney;
console.log(typeof(myMoney));

var checkFlag = true;
console.log(typeof checkFlag);
var checkFlagV2 = false;

if(!checkFlagV2){
	console.log('OK');
} else {
	console.log('Not OK');
}

if(checkFlagV2 == ''){
	console.log('Yes');
} else {
	console.log('NO');
}
// false == '' == 0 ve mat gia tri
// true == 1 ve mat gia tri

var number1 = 10;
var number2 = '20b';
var sum = number2 - number1;
console.log(sum);
// number string : trong chuoi chi chua cac con so thi cac phep toan hoc -,*,/ van tinh toan binh thuong
// trong lap trinh thuc te thi hay convert ve number thi moi tinh toan cac phep toan hoc

/*************** khai bao bien trong JS ******************/
// bien khong duoc bat dau bang so
// var 123Name = 'dasda'; // sai
// var _123Name = 'ewe'; // hop le
// bien khong duoc trung cac tu khoa trong lap trinh
// var while = 'wqwqw'; // sai
// chu cai dau tien viet thuong, cac chu cai dau tien con lai cua cac tu tiep theo viet hoa
var ngayMaiTroiNangDep;
// var NgayMaiTroiNangDep // ko nen dung
// var hom_nay_troi_nang_dep // ko nen dung
var name  = 'A';
// var Name = 'B'; // ko nen dung
// 2 bien nay khac nhau hoan toan - phan biet chu hoa chu thuong
 
/*************** tu khoa const ************/
// const: tu khoa khai bao hang so
// nguye tac dat ten: Cac tu viet hoa va cach nhau dau gach duoi 
const MY_NAME = 'ADDSD';
console.log(MY_NAME);

//MY_NAME = 'wfsafsfs'; // khong duoc phep thay doi gia tri cua hang so
//console.log(MY_NAME);

//const MY_NAME = 'BBBBBBB'; // sai
//console.log(MY_NAME);

/***************** tu khoa var ***************/
var myClass = 'LPHP1908E';
console.log(myClass);
// var myClass = 'LJava1908E'; // ko nen lam
myClass = 'LJava1908E';
console.log(myClass);

var test = 10;
if(true){
	var test = 20;
	console.log(test);
}
console.log(test);

let demo = 10; // bien toan cuc
if(true){
	let demo = 20; // bien cuc bo
	// co pham vi hoat dong gan cap ngoac nhon bao lay no nhat
	console.log(demo);
}
console.log(demo);

let testFlag = 10;
console.log(testFlag);
//let testFlag = 20;
//console.log(testFlag);

function testFuntion()
{
	//var x = 10;
	let x = 10;
	if(true){
		//var x = 20;
		let x = 20;
		console.log(x);
	}
	console.log(x);
}
testFuntion(); // goi ham ra su dung







































