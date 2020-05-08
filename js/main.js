$(document).ready(function(){
   //nav slide toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    //stickey navbar
    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc>10){
           $('header').addClass('sticky');
        }else{
             $('header').removeClass('sticky');
        }
    });
});
/*var icon= document.getElementsByClassName('icon');
var function affiche(){
    icon.value.dispaly='block';}
*/