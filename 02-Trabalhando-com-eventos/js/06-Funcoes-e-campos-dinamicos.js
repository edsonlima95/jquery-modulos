$(function () {
    //Encapsula o debug
    var ex = $('.exemplo');

    $('form :text').focusin(function () {
        //Joga no debug o valor digitado, mas so se clicar dentro denovo.
        ex.text($(this).val());
    });

    //Trigger, despara o evento.
    $('.j_disparar').click(function () {
        $('form :text').trigger('focusin');
        //Envia o formulario junto com o evento.
        $('form[name=campos-dinamicos]').submit();
    });

    //Append, adiciona conteudo depois do atributo selecionado.
    //$('.campos').append('ola');

    //Ira adicionar depois da div campos um input.
    $('.j_adicionar').click(function () {
        $('.campos').append('<input type="text" name="texto[]">');
    });

    //O prepend, Ira adicionar antes da div campos um input.
    $('.j_file').click(function () {
        $('.campos').prepend('<input type="file" name="file[]" multiple="multiple">');
        //Evita adicionar mais campos de file com o unbind.
        $(this).unbind('click');
    });
});