
      $(document).ready(function (){
            $("#click").click(function (){
                $('html, body').animate({
                    scrollTop: $("#1").offset().top
                    }, 2000);
            });

             $("#view").click(function (){
                $('html, body').animate({
                    scrollTop: $("#3").offset().top
                }, 2000);
            });

                 $("#learn").click(function (){
                $('html, body').animate({
                    scrollTop: $("#4").offset().top
                    }, 2000);
            });

             $(function() {
 
  $('#con').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  
});
 });
    