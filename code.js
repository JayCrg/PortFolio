$(document).ready(() => {
    $(".hamburger-lines").click(() => {
      $(".checkbtn").toggleClass("open");
      $("body").toggleClass("fixed_position");
    });
  
    // Cerrar menu al pulsar enlace
    $("ul a").click(() => {
      $(".checkbtn").removeClass("open");
      $("body").removeClass("fixed_position");
    });
  
  });

  function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


$(window).scroll(function () {
  // Comprobamos si el elemento ha sido scrolleado a la vista

  if (isScrolledIntoView($('#html--animation'))) {
    // Si es así, añadimos la clase correspondiente a la animacion al elemento.
    // Si queremos que al salir de la vista se quite la clase, añadimos un else con la funcion removeClass
    // Haciendo esto conseguimos que la animacion se ejecute cada vez que el elemento entra en la vista

    $('#html--animation').addClass('html-animated');
  } else{
    $('#html--animation').removeClass('html-animated');
  }
  
  if(isScrolledIntoView($('#css--animation'))) {
    $('#css--animation').addClass('css-animated');
  } else{
    $('#css--animation').removeClass('css-animated');
  }
  
  if(isScrolledIntoView($('#js--animation'))) {
    $('#js--animation').addClass('js-animated');
  } else{
    $('#js--animation').removeClass('js-animated');
  }

  if(isScrolledIntoView($('#php--animation'))) {
    $('#php--animation').addClass('php-animated');
  } else{
    $('#php--animation').removeClass('php-animated');
  }
  
  if(isScrolledIntoView($('#python--animation'))) {
    $('#python--animation').addClass('python-animated');
  } else{
    $('#python--animation').removeClass('python-animated');
  }

  if(isScrolledIntoView($('#linux--animation'))) {
    $('#linux--animation').addClass('linux-animated');
  } else{
    $('#linux--animation').removeClass('linux-animated');
  }

  if(isScrolledIntoView($('#sql--animation'))) {
    $('#sql--animation').addClass('sql-animated');
  } else{
    $('#sql--animation').removeClass('sql-animated');
  }
  
  if(isScrolledIntoView($('#c--animation'))) {
    $('#c--animation').addClass('c-animated');
  } else{
    $('#c--animation').removeClass('c-animated');
  }

  if(isScrolledIntoView($('#rotacion'))) {
    $('#rotacion').addClass('rotando');
  }

  if(isScrolledIntoView($('#presentacion'))) {
    $('#presentacion').addClass('faded');
  }
});