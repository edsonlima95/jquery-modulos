$(function () {

    //O attr recupera o valor de um atributo, e tbm substitui o valor se quiser.
    /*$('img').on('error',function () {
       var img = $(this).attr('src'); //A var img agora recebe o valor img/load.gif que esta dentro do atributo.
        $('img').attr('src', 'img/error.jpg');//Troca o valor por esse novo.
    }).attr('src','img/load.gif');*/

    //Definindo o tamanho da imagem de acordo com a tela.
//    $('body').css({overflow:'hidden',margin:'0'});

    //deifine o height e width, apenas quando redimencionar o browser
//    $(window).resize(function () {
//        $('img').width($(window).width()).height($(window).height());
//    });

    //Evento scroll, quando rolar o body muda de cor.
//    $(window).scroll(function () {
//        $('body').css('background-color','red');
//        $('img').fadeOut(1000);
//    });

    //Aplica o efeito quando o scroll atingir certo ponto.
    $(window).scroll(function () {
        //Calcula a distancia do top na rolagem.
        var topo = $(window).scrollTop();
        //Verifica se e maior que 300px.
        if (topo > 300) {
            $('body').css('background-color', 'red');
            $('img').fadeOut(500);
        } else {
            $('body').css('background-color', 'green');
            $('img').delay().fadeIn(1000);
        }
    });
})
