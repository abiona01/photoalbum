$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
function myFunction(imgs) {
    var largeImg = document.getElementById("largeImg");
    var imgText = document.getElementById("imgtext");
    largeImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    largeImg.parentElement.style.display = "block";

}