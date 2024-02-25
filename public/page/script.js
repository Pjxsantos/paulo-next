$(window).load(function() { // Garante que todo o site seja carregado
    $('#status').fadeOut(); // primeiro desaparecerá a animação de carregamento
    $('#preloader').delay(350).fadeOut('slow'); // desaparecerá o DIV branco que cobre o site.
    $('body').delay(350).css({'overflow':'visible'});
  })