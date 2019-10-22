// khai bao - dinh nghia object trong js
let myCar = {name: 'BMW', color: 'white', weight: 1200};
let person = {
	name: 'Nguyen Van Teo', // property
	age: 20,
	add: 'Ha Noi',
	phone: '02314234',
	gender: 1,
	working: function(){
		// method
	},
	gotoSleep: (time) => {
		return time + 'AM';
	}
};
// in ra gia tri trong object
let nameCar = myCar.name;
let nameCar2 = myCar['name'];
console.log(nameCar, nameCar2);

let timeSleep = person.gotoSleep(0);
console.log(timeSleep);

let flowers = {};
flowers.name = 'hoa hong';
flowers.color = 'mau do';
flowers.buys = () => {

};
console.log(flowers);
let cats = {
	name: 'Tom',
	color: 'white',
	location: { add: 'Ha Noi'}
}

let students = [
	{
		msv: 113,
		name: 'Van Teo',
		email: 'vanteo@gmail.com',
		phone: '0987558',
		add: 'Ha Nam',
		money: 321321,
		gender: 1 // nam
	},
	{
		msv: 114,
		name: 'Van Ty',
		email: 'vanty@gmail.com',
		phone: '098753238',
		add: 'Ha Noi',
		money: 3321,
		gender: 1 // nam
	},
	{
		msv: 115,
		name: 'Thi A',
		email: 'thia@gmail.com',
		phone: '098253238',
		add: 'Hai Duong',
		money: 339921,
		gender: 0 // nam
	}
];
console.log(students[2].msv, students[2]['msv']);

// duyet object
// 1 -  for ... in
for(let i in myCar){
	console.log(i, myCar[i]);
}

for(let i in students){
	console.log(students[i].email);
}

let tongTien = 0;

let table = '';
table += '<table border="1" width="100%">';

students.forEach(function(el, index) { 
	tongTien += Number.parseInt(el.money);

	table += '<tr>';
		table += '<td>'+ el.msv +'</td>';
		table += '<td>'+ el.name +'</td>';
		table += '<td>'+ el.email +'</td>';
		table += '<td>'+ el.phone +'</td>';
		table += '<td>'+ el.add +'</td>';
		table += '<td>'+ el.money +'</td>';

		if(el.gender == 1){
			table += '<td> Nam </td>';
		} else {
			table += '<td> Nu </td>';
		}
	table += '</tr>';
});

table += '<tr>';
	table += '<td colspan="5">Tong hoc bong</td>';
	table += '<td colspan="2">'+tongTien+'</td>';
table += '</tr>';

table += '</table>';
document.write(table);







