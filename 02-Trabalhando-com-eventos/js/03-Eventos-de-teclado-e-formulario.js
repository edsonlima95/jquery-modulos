$(function () {
    //Fazendo um placeholder com focusin e focusout.

    //Percorre cada elemento que tiver o j_place.
    $('.j_place').each(function () {
        //Seta o valor do titulo do campo.
        var place = $(this).attr('title');
        //Seta os input que tiver j_place.
        var input = $(this);

        input.val(place)//Coloca o valor de place no campo.
                .css('color', '#ccc')//Muda a cor do texto.
                .focusin(function () {//quando curso tiver dentro.
                    input.css('color', '#000');//cor volta ao normal do texto
                    //se o texto do campo for iqual do titulo ele e setado em branco.
                    if (input.val() == place) {
                        input.val('');
                    }
                }).focusout(function () {
            //se o texto do campo for iqual null ele e setado com o valor.
            if (input.val() == '') {
                input.val(place);
                input.css('color', '#ccc');
            }
        });
    });

    //Change, ele verifica o valor toda vez que for alterado.
    var ex = $('.exemplo');
    $('.j_ch').change(function () {
        ex.text('Você alterou o valor do campo ' + $(this).val());
    });
    
    //Evento submit.
    $(':button').click(function () {
        $('form').submit();
    });
    
});