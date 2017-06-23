$(function () {
    //Encapsula os elementos.
    var debug = $('.debug');
    var form = $('form[name=cadastro]');
    var url = 'php/aula3.php';

    //Funcao de callback
    function resposta(res) {
        debug.empty().html('<pre>' + res + '</pre>');
    }

    //Envia os dados via post do ajax.
    /*form.submit(function () {
     
     $.ajax({
     type: 'POST',
     url: url,
     data: $(this).serialize(),
     error: resposta("Error!"),
     success: resposta
     });
     
     return false;
     });*/

    //Setando metodos.
    function carregando(dados) {
        debug.html('<img src="img/load.gif"> carregando...');
    }

    function sucesso(dados) {
        debug.html("<pre>" + dados + "</pre>");
    }

    function erroEnvio(dados) {
        debug.html('Error ao tentar enviar!');
    }

    function completo(dados) {
        window.setTimeout(function () {
            debug.html('Sucesso ao enviar!');
        }, 1000);
    }

    //Envia os dados via ajax, com as funcoes como parametro.
    /*form.submit(function () {
     $.ajax({
     type: 'POST',
     url: url,
     data: $(this).serialize(),
     beforeSend: carregando, //Mesmo que o progress.
     success: sucesso,
     error: erroEnvio,
     complete: completo
     });
     
     return false;
     });*/

    //Configura as funcões como se fosse padrão.
    $.ajaxSetup({
        type: 'POST',
        url: url,
        beforeSend: carregando, //Mesmo que o progress.
        error: erroEnvio,
        success: sucesso, 
        complete: completo
    });

    //Envia os dados com o as funcões padrões.
    form.submit(function () {
        //Pode ser subscritas as funcoes, menos os dados.
        $.ajax({data: $(this).serialize()});
        return false;
    });
});