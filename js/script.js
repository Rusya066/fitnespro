var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


//Modal window
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
var modal__call = document.getElementById("myModal__call");
var btn__call = document.getElementById("myBtn__call");
var btn2__call = document.getElementById("myBtn2__call");
var span__call = document.getElementsByClassName("close__call")[0];
btn__call.onclick = function() {
  modal__call.style.display = "block";
}
btn2__call.onclick = function() {
  modal__call.style.display = "block";
}
span__call.onclick = function() {
  modal__call.style.display = "none";
}
var modal__free = document.getElementById("myModal__free");
var btn__free = document.getElementById("myBtn__free");
var span__free = document.getElementsByClassName("close__free")[0];
btn__free.onclick = function() {
  modal__free.style.display = "block";
}
span__free.onclick = function() {
  modal__free.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal__call) {
    modal__call.style.display = "none";
  }
  else if(event.target == modal__free) {
    modal__free.style.display = "none";
  }
}


$(document).ready(function() { 
	$(".image").click(function(){
	  	var img = $(this);	
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+ 
						 "</div>");
		$(".popup").fadeIn(200); 
		$(".popup_bg").click(function(){	
			$(".popup").fadeOut(200);	
      setTimeout(function() {	
			  $(".popup").remove(); 
			}, 200);
		});
	});
});