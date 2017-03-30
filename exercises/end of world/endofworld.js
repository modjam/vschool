//$(document).ready(function() {
//
//  // Function to update counters on all elements with class counter
//  var doUpdate = function() {
//    $('.countdown').each(function() {
//      var count = parseInt($(this).html());
//      if (count !== 0) {
//        $(this).html(count - 1);
//      }
//    });
//  };
//
//  // Schedule the update to happen once every second
//  setInterval(doUpdate, 1000);
//});

$('.timer').startTimer({
  onComplete: function(element){
    element.addClass('is-complete');
  }
});