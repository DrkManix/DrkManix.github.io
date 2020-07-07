// add function to all info buttons
$('.info-button').click(function(){
  // add open class to button
  $(this).toggleClass("open");
  // get next element, which is description
  var description = $(this).next();
  if ( description.height() ) {
    // description is open, we want to close it!
    // so: we delete the max-height attribute
    description.css('max-height', '0');
  } else {
    // description is closed, we want to open it!
    // scrollHeight is the height of the object, regardless of whether it's displayed or not
    description.css('max-height', description.prop('scrollHeight') + "px");
  }
});
// add accordion to menu
$('.menu-button').click(function(){
  // add open class to button
  $(this).toggleClass("open");
  // get next element, which is description
  var subnav = $(this).next();
  if ( subnav.height() ) {
    // description is open, we want to close it!
    // so: we delete the max-height attribute
    subnav.css('max-height', '0');
  } else {
    // description is closed, we want to open it!
    // scrollHeight is the height of the object, regardless of whether it's displayed or not
    subnav.css('max-height', subnav.prop('scrollHeight') + "px");
  }
});



// script for loop scrolling
//    $('.content').ready(function() {

//         var origDocHeight = document.body.offsetHeight;
//
//         var clone=$(".content").contents().clone();
//         clone.appendTo(".content");
//         clone.prependTo(".content");

//         $('.content').scroll(function(){

//             var scrollWindowPos = $('.content').scrollTop();

//             if(scrollWindowPos >= origDocHeight ) {
//                 $('.content').scrollTop(0);
//             }
//             if(scrollWindowPos <= 0 ) {
//                  $('.content').scrollTop(origDocHeight);
//              }
//         });
//     });
