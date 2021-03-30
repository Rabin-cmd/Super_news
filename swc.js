// $(document).ready(function() { 
//   var id = '#dialog';
//   var maskHeight = $(document).height();
//   var maskWidth = $(window).width();
//   $('#mask').css({'width':maskWidth,'height':maskHeight}); 
//   $('#mask').fadeIn(500); 
//   $('#mask').fadeTo("slow",0.9); 
//         var winH = $(window).height();
//   var winW = $(window).width();
//         $(id).css('top',  winH/2-$(id).height()/2);
//   $(id).css('left', winW/2-$(id).width()/2);
//      $(id).fadeIn(2000);  
//      $('.window .close').click(function (e) {
//   e.preventDefault();
//   $('#mask').hide();
//   $('.window').hide();
//      });  
//      $('#mask').click(function () {
//   $(this).hide();
//   $('.window').hide();
//  });  
 
// });
if (!window.Notification) {
      console.log('Browser does not support notifications.');
  } else {
      // check if permission is already granted
      if (Notification.permission === 'granted') {
          // show notification here
      } else {
          // request permission from user
          Notification.requestPermission().then(function(p) {
             if(p === 'granted') {
                 // show notification here
             } else {
                 console.log('User blocked notifications.');
             }
          }).catch(function(err) {
              console.error(err);
          });
      }
  }