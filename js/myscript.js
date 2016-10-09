$(function(){

	//tabs
	$('.wap_list_mean li').click(function() {
		//alert('');
		$(this).siblings('li').removeClass('list_bg');
		$(this).addClass('list_bg');

		var hd_id = $(this).attr("id");

		$('.wap_list_main > div').each(function() {

			if ($(this).attr("id") == hd_id) {
				$(this).siblings('div').removeClass('show');
				$(this).addClass('show');
			};
		});

	});

	// 涓汉涓績棣栭〉
		$('.list_mean li').click(function() {
		//alert('');
		$(this).siblings('li').removeClass('mean_bg');
		$(this).addClass('mean_bg');

		var hd_id = $(this).attr("id");

		$('#toBodys > div').each(function() {

			if ($(this).attr("id") == hd_id) {
				$(this).siblings('div').removeClass('show');
				$(this).addClass('show');
			};
		});

	});







})
