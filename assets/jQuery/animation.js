//console.log("hello");
setInterval(function(){
    $(document).ready(function(){
        $(".inside-down-link").animate({marginTop : '30px',opacity:'0'},"slow");
        $(".inside-down-link").fadeOut();
        $(".inside-down-link").animate({marginTop : '5px',opacity:'1'});
        $(".inside-down-link").fadeIn();
    });
   
    
},1000);



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.go-to-top').style.display = 'block';
        document.querySelector("nav").style.backgroundColor = "black";
  } else {
        document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector('.go-to-top').style.display = 'none';
  }
}   
