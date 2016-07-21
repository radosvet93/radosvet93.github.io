 $(function() {
     $("#toggle").click(function() {
         $("header").slideToggle("fast", "linear");
     });
 });



 $(function() {

     /* SET PARAMETERS */
     var change_img_time = 5000;
     var transition_speed = 600;

     var simple_slideshow = $(".image1"),
         listItems = simple_slideshow.children('li'),
         listLen = listItems.length,
         i = 0,

         changeList = function() {

             listItems.eq(i).fadeOut(transition_speed, function() {
                 i += 1;
                 if (i === listLen) {
                     i = 0;
                 }

                 listItems.eq(i).fadeIn(transition_speed);
             });

         };

     listItems.not(':first').hide();
     setInterval(changeList, change_img_time);


 });


 $(function() {
    $(window).resize(function() {
     if ($(".image1").width() >= 768) {
         $(".image1").toggleClass("image2");


     }});
 });