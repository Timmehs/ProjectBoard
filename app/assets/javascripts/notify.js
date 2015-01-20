

var notify = function(msg) {
  $('.notice').html(msg);
  $('.notice').addClass('active').addClass('default');
  setTimeout(function() { 
		$('.notice').removeClass('notifying').removeClass('default');
	}, 3000 );
};

var warn = function(msg) {
  $('.notice').html(msg);
  $('.notice').addClass('active').addClass('warning');
  setTimeout(function() { 
		$('.notice').removeClass('warning').removeClass('active'); 
	}, 5000 );
};