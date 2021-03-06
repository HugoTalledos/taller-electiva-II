$(document).on('focus', 'li', function (event) {
	$(this).css('background', 'red');
});
/*
jQuery(function($) {
    $('.section-animated').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '70%',
        triggerOnce: false
    });
});
*/
$(document).on('ready', function (event) {
	$('#infrastructuraymineria').attr('style', 'background:red; color:red;');
});
$('#infrastructuraymineria').on('click', function (event) {
	alert('holi');
	var dir = 'infrastructuraymineria/';
	var fileextension = '.png';
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as 'browsable'
		url: dir,
		function(data) {
			//List all .png file names in the page
			$(data)
				.find('a:contains(' + fileextension + ')')
				.each(function () {
					var filename = this.href
						.replace(window.location.Host, '')
						.replace('http://', '');
					$('#infrastructuraymineria').append("<img src='" + dir + filename + "'>");
				});
		},
	});
});
