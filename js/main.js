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
