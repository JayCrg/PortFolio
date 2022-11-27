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