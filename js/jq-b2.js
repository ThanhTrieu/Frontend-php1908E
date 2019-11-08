$(document).ready(function() {
	// bat su kien cho button click me
	$('.js-click').click(function() {
		// lay ra noi dung cua the h1
		
		//let textTag = $('h1').text();
		//alert(textTag);
		//$('h1').text('Learning PHP');
		
		let textTag2 = $('h1').html();
		alert(textTag2);
		$('h1').html('<i>Learning MySQL</i>');
		$('h1').append('<u>Hello PHP</u>');

		// xoa text van ban
		$('h1').empty();
		// xoa ca the html
		$('h1').remove();

		//$('.box').fadeIn();
		//$('.box').show(3000);
		$('.box').slideDown(300);
	

	});

	$('.js-click-2').click(function(){
		// an cai box di
		// $('.box').fadeOut();
		//$('.box').hide(3000);
		//$('.box').slideUp(300);
		$('.box').slideToggle(5000);
	});

	// bat su kien nguoi dung thay doi so luong mua
	$('input[class="qty"]').change(function() {
		var self = $(this);
		// can lay ra don gia tuong ung cua so luong can mua
		var pricePd = self.parent().prev().text().trim();
		var qty = self.val().trim();	

		// cap nhat cot tien
		var money = pricePd * qty;
		// cap nhat lai cot tien
		self.parent().next().text(money);

		// cap nhat tong tien
		var totalMoney = 0;
		$('.money').each(function(index, el) {
			totalMoney += Number.parseInt($(el).text().trim());
		});
		$('#totalMoney').text(totalMoney);
		console.log(totalMoney);
	});
});