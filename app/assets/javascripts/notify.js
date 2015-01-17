

var notify = function(msg) {
  $('.notice').html(msg);
  $('.notice').addClass('notifying');
  setTimeout(function() { $('.notice').removeClass('notifying'); }, 3000 );
};

var warn = function(msg) {
  $('.notice').html(msg);
  $('.notice').addClass('warning');
  setTimeout(function() { $('.notice').removeClass('warning'); }, 5000 );
};
