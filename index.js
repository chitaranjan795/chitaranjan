const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive= () => {
  hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

$(".hamburger").click(function(){
  $(".link").slideToggle();
});

// document.getElementById("extra").innerHTML=hello;

$("#readmore").click(function(){
  $("#rajapara").toggle();
});

$("#readmore").click(function(){
  $("#readmore").fadeOut(1);
});
