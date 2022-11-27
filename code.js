$(document).ready(function() {
    $(".hamburger-lines").click(() => {
      $(".checkbtn").toggleClass("open");
      $("body").toggleClass("fixed_position");
    });
  
    // Cerrar menu al pulsar enlace
    $(".menu a").click(() => {
      $(".checkbtn").removeClass("open");
      $("body").removeClass("fixed_position");
    });
  
  });