//burger menu

$(document).ready(function() {
	$('.header-burger').click(function (event) { 
		$('.header-burger,.header-nav').toggleClass('active');
		
	});
});

//our-works carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slides__my-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//opinions carousel
var opinionIndex = 1;
showOpinions(opinionIndex);

function plusOpinions(o) {
  showOpinions(opinionIndex += o);
}

function currentOpinion(o) {
  showOpinions(opinionIndex = o);
}

function showOpinions(o) {
  var i;
  var opinion = document.getElementsByClassName("opinions-carousel__slides-opinion");
  var dots = document.getElementsByClassName("op-dot");
	var captionText = document.getElementById("caption");
  if (o > opinion.length) {opinionIndex = 1}
  if (o < 1) {opinionIndex = opinion.length}
  for (i = 0; i < opinion.length; i++) {
		opinion[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  opinion[opinionIndex-1].style.display = "block";
  dots[opinionIndex-1].className += " active";
}
