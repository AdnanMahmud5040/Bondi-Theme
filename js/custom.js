$(function(){
// Back to top
$('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1000);
});

$(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 200){
                $('.back-to-top').fadeIn(500);
        }
        else{
                $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 300){
                $('nav').addClass('bg');
        }
        else{
                $('nav').removeClass('bg')
        }
});

$(".menu a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });

// Veno Box
$('.venobox').venobox();


$(window).on('load', function(){
        $('.preloader').delay(600).fadeOut(500);
});


new WOW().init();

});