$(function () {
    var exemplo = $('.exemplo');

    $(':input').change(function () {

        //Attr apenas recupera o valor do atributo.
        var acheck = $(this).attr('checked') + ' - ' + $(this).attr('name');

        //O Prop tbm recupera o valor, e retorna true ou false.
        var pcheck = $(this).prop('checked') + ' - ' + $(this).prop('name');

        //Exibe os valores.
        exemplo.html('ATRR: ' + acheck + '<br> PROP: ' + pcheck);


    });

    $('.remove').click(function () {
        //Remove um atributo.
        $(':checkbox').removeAttr('checked');

        //Remove a propriedade do atributo.
//        $(':checkbox').removeProp('checked');
        $('input').trigger('change');
    });

    //edita um atributo de um elemento.
    $('.editar').click(function () {
        $('input').attr('name', 'Adicionado pelo attr');
//        $('input').prop('name','Adicionado pelo prop');
        $('input').trigger('change');
    });

    //Dispara um evento atribuido ao elemento, ou seja toda vez que der
    //o refresh ele ira executar o change assim o checked não fica marcando e desmacando.
    $('input').trigger('change');
});