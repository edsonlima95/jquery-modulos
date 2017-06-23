$(function () {
    //Encapsula o valor.
    var ex = $('.exemplo');

    //Evento de um click.
    $('.j_um').click(function () {
        $(this).css('background-color', '#ccc');

        //Como ja tem o valor não precisa do seletor, pode ser acessado ditro.
        ex.text('Você deu um click!');
    });

    //Evento dois clicks.
    $('.j_dois').dblclick(function () {
        $(this).css('background-color', '#ccc');

        //Como ja tem o valor não precisa do seletor, pode ser acessado ditro.
        ex.text('Você deu dois click!');
    });

    //Focosin e focosout.
    $('.j_tres').focusin(function () {
        $(this).css({'background-color': '#fff', color: '#000'});
        ex.text('Você esta com o focusin');
    });

    //Focosin e focosout.
    $('.j_tres').focusout(function () {
        $(this).css({'background-color': '#000', color: '#fff'});
        ex.text('Você esta com o focusout');
    });

    //cada vez tiver com ponteiro do mouse dentro ira contar + 1;
    var count = 0;
    $('.j_quatro').mouseenter(function () {
        count++;
        ex.text('Evento mouseenter ' + count);
    }).mouseout(function () {
        ex.text('Evento mouseout não conta :)');
    });

    //Mouseover;
    $('.j_cinco').mouseover(function () {
        ex.css('background-color', '#000');
    }).mouseleave(function () {
        ex.css('background-color', 'red');
    });

});