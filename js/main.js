var  navId = '#nav';


var offSet = $("#title-main-frame").offset().top + 400;




var $w = $(window).scroll(function(){
   if($w.scrollTop() > offSet){
       $(navId).addClass('header-animation');
       
   }
       
    else{
        $(navId).removeClass("header-animation");
       
    }
});


$(function() {
	
    if($w.scrollTop() > offSet){
       $(navId).addClass('header-animation');
       
   }
       
    else{
        $(navId).removeClass("header-animation");
       
    }

});