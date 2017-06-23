$(function () {

    /*$('.distancia').click(function () {
     var exemplo = $('.debug');
     //Obtem a distancia do documento.
     var offset = $(this).offset();
     //Position mede a distancia da janela.
     var position = $(this).position();
     
     exemplo.html("OFFSET - top "+ offset.top + "px <br> OFFSET - left " + offset.left + "px <br>" +
     "POSITION - top "+ position.top + "px <br> POSITION - left " + position.left + "px");
     });*/

    var ex = $('.distancia');
    //Descobre a altura da pagina.
    var documentoDis = $(document).height();
    //Descobre o tamanho da janela.
    var janelaDis = $(window).height();
    //Calcula a distancia do resto da pagina apartir do botao.
    var restoJanela = documentoDis - janelaDis;

    $(document).scroll(function () {
        //Verifica a distancia do botao do topo ao da o scroll.
        var meuBotao = $(document).scrollTop();
        var janela = (restoJanela - meuBotao);
        ex.text(janela);
        if (janela == 0) {
            $('.scroll').fadeIn(1000);
        } else {
             $('.scroll').css('display','none');
        }

    });

    $('.scroll').on('click', function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

});