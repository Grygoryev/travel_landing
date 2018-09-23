var slideIndex = 1;

showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var backgrounds = document.getElementsByClassName("intro__bg");
  var dots = document.getElementsByClassName("slider-dots__dot");
  var titles = document.getElementsByClassName("intro__title");
  var subTitles = document.getElementsByClassName("intro__sub-title");
  if (n > backgrounds.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = backgrounds.length}

  for (i=0; i < backgrounds.length; i++) {
      titles[i].style.display = "none";
  }
  for (i=0; i < backgrounds.length; i++) {
      subTitles[i].style.display = "none";
  }
  for (i = 0; i < backgrounds.length; i++) {
     backgrounds[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  backgrounds[slideIndex-1].style.display = "block";
  titles[slideIndex -1].style.display = "block";  
  subTitles[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}








// var cubaTitle = 'Cuba';
// const arcticaTitle = 'Arctica';
// var cubaSubTitle = 'Explore the world of Casas & Cadillacs';
// const title = document.getElementsByClassName('intro__title');
// const title2 = title[0];
// var subTitle = document.getElementsByClassName('intro__sub-title');