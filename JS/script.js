/*  $(document).ready(function() {
  $(".menu-toggler").on('click',function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
});
  */

document.getElementById("menu-toggler").onclick = function() {
  document.getElementById("menu-toggler").classList.toggle("open");
  document.getElementById("top-nav").classList.toggle("open");
};


document.getElementById("top-nav").onclick = function() {
  document.getElementById("menu-toggler").classList.remove("open");
  document.getElementById("top-nav").classList.remove("open");
};

