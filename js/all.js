$(document).ready(function () {
  $("#button-toggle").on('click', function () {
    $("#moblie-menu").slideToggle();
    $("#moblie-menu").toggleClass("header-box-shadow");
    $("#header").toggleClass("header-box-shadow");
  });
});