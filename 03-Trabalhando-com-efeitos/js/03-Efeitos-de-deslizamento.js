$(function () {
    var disparar = $('input[class=disparar]');
    var verificar = $('input[class=verificar]');


    //Efeito slide.
    /*disparar.click(function () {
     $('.exemplo').slideUp(1000);
     }).dblclick(function () {
     $('.exemplo').slideDown(1000);
     });*/

    //Efeito toggle, alterna entre up e down.
    disparar.click(function () {
        $('.exemplo').slideToggle(1000);
    });


    //Verifica o efeito.
    verificar.click(function () {
        if ($('.exemplo').is(':visible')) {
            $('body').append('<h2 style="color: green">Visivél!</h2>');
        } else if ($('.exemplo').is(':hidden')) {
            $('body').append('<h2 style="color: red">Não esta visivél!</h2>');
        }
        $('h2').delay(1000).slideUp('slow');
    });

});