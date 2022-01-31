$(document).ready(function(){

    $('.habilidades-Menu').on('click',function(){
        window.scrollTo(0, $('.habilidades-container').offset().top);
    });
    $('.portafolio-Menu').on('click',function(){
        window.scrollTo(0, $('.proyectos-container').offset().top);
    });


});