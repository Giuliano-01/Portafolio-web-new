$(document).ready(function(){

    /*poner scroll en el inicio*/
    window.scrollTo(0,0);

    $('.habilidades-Menu').on('click',function(){
        window.scrollTo(0, $('.habilidades-container').offset().top);
    });
    $('.portafolio-Menu').on('click',function(){
        window.scrollTo(0, $('.proyectos-container').offset().top);
    });

    /*animations on load*/
    if(window.scrollY==0){
        $('.banner-content h1').animate({opacity:0},'1500',function(){console.log("termino")});
        $('.banner-content h1').animate({opacity:1},'slow',function(){console.log("termino")});
    }
    $(document).on('scroll',function (){
        if(window.scrollY==0){
            $('.banner-content h1').animate({opacity:1},'slow',function(){console.log("termino")});
        }      
        console.log(window.scrollY);
    });
    
    $('.more-info-link-container').on('click', '.flechaabajo',function(event){
        event.preventDefault();
        if($('.more-info-link-container').children().hasClass("flechaarriba")){
            window.scrollTo(0, $('.cabecera').offset().top);
        }else{
            window.scrollTo(0, $('.habilidades-container').offset().top);
        }
        
        $(this).closest('.habilidades-container').find('.moreinfo').toggle(500, function(){console.log("se completo")}); //tarda 1 seg en mostrarse y el otro param es la funcion de cuando termina
        $('.more-info-link-container').children().toggleClass('flechaarriba');
        
    });

});