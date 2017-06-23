$(function () {
    //Encapsula os valores.
    var debug = $('.debug');
    var form = $('form[name=cadastro-dados]');
    var url = 'php/aula1.php';

    //Primeira maneira de enviar.
   /*form.submit(function () {
        //Recupera os valores dos campos.
        var nome = $('input[name=nome]').val();
        var sobre = $('input[name=sobre]').val();

        //Envia os dados via post.
        $.post(url, {nome: nome, sobre: sobre}, function (res) {
            debug.html(res);
        });

        return false;
    });*/
    
    //Funcao de callback.
    function resposta(dados){
        debug.empty().html(dados);
    }
    
    //Segundo metodo de envio.
    /*form.submit(function () {
        //Ao em vez de passar campo por campo, e so da um this com serialize que pega todos os campos.
        // e tbm pode executar uma funcao externa como resposta
        $.post(url,$(this).serialize(),resposta);
        
        return false;
    });*/

    //Executando outros metodos do post.
    form.submit(function () {
        //Armazena as propriedades do post.
        var postar = $.post(url,$(this).serialize());
        //Progress - carrega a img do load.
        postar.progress(resposta('<img src="img/load.gif" width="20"> Carregando...'));
        //done - sucesso.
        postar.done(resposta);
        //Fail -  se der error. o fail e melhor com o callbakc pq ele executa mais rapido que o done.
        postar.fail(function () {
            resposta('Error ao envair!')
        });
        return false;
    });

});

