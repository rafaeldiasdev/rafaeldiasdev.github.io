$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);  
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed'));
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
		            
            });
   });  
});
  
 var $doc = $('html, body');
 /*captura elementos da classe scroll*/
$('.scroll').click(function() {
    $doc.animate({
        /*define parâmetros para o scroll*/
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
