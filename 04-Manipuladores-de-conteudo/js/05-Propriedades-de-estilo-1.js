$(function () {

    //Adiciona o css ao elemento.
    /*$('span').css('background','red');
     
     //Varios elementos.
     $('span').css({
     display: 'block',
     margin: '30px 0px 10px 0px'
     });*/

    //Declarando uma variavel.
    var estilo = {
        border: '3px solid #ccc',
        display: 'block',
        padding: '5px',
        color: '#fff',
        margin: '30px 0px 10px 0px',
        'text-align': 'center'
    }

    $('span').css(estilo);

    /*$('span').click(function () {
     //Recebe a cor da span clicada.
     var bg = $(this).css('background-color');
     
     //Verifica a class ativo.
     if ($(this).hasClass('ativo')) {
     $(this).removeClass('ativo');
     } else {
     $('span').removeClass('ativo');
     $(this).addClass('ativo');
     //Adiciona o RGB da cor no banner, e adiciona a cor dele junto.
     $('.debug').text(bg).css('background', bg);
     }
     });*/

    $(':button').click(function () {
        //Recebe a primeira span.
        var span = $('span:first');
        var exemplo = $('.debug');
        var spanWidth = span.width();//Width normal.
        var innerWidth = span.innerWidth();//Width + a margin.
        var outerWidth = span.outerWidth();//Width + margin + bordar.

        //Pode tabém ser feito com o height do mesmo jeito.
        
        //Adiciona os valores ao debug.
        exemplo.html(
                "Width: " + spanWidth + "<br>" +
                "InnerWidth" + innerWidth + "<br>" +
                "OuterWidth" + outerWidth + "<br>"
                );
    });

});