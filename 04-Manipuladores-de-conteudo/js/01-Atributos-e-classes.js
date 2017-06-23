$(function () {
    
    //eq() seleciona os elementos pela ordem, o primeiro começa com 0.
    
    var exemplo = $('.exemplo');
    
    //Adiciona uma classe a o elemento.
    $(':button:eq(0)').click(function () {
        exemplo.addClass('adicionar');
    });
    
     //Adiciona uma classe a o elemento.
    $(':button:eq(1)').click(function () {
        exemplo.removeClass('adicionar');
    });
    
     //Alterna entre adicionar e remover.
    $(':button:eq(2)').click(function () {
        exemplo.toggleClass('adicionar');
    });
    
     //Verifica se tem classe.
    /*$('.exemplo').click(function () {
        if(exemplo.hasClass('adicionar')){
            exemplo.text('A classe existe');
        }else{
             exemplo.text('A classe que existe é ' + exemplo.attr('class')); 
        }
    });*/
    
    //Clona a class.
    $(':button:last').click(function () {
        exemplo.clone().prependTo('body');
    });
    
     //Verifica se tem classe.
    $('body').on('click','div',function () {
        if($(this).hasClass('adicionar')){
            $(this).text('A classe existe');
        }else{
             $(this).text('A classe que existe é ' + exemplo.attr('class')); 
        }
    });
    
    
    
});