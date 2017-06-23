$(function () {

    //Encapsula os elementos.
    var debug = $('.debug');
    var form = $('form[name=cadastro]');
    var url = 'php/aula2.php';

    //Funcao de callback
    function resposta(res) {
        debug.empty().html(res);
    }

    //Envia via get e retorna um json.
    /*form.submit(function () {
     
     //Recupera todos os campos do form.
     var dados = $(this).serialize();
     
     //Envia dados via get.
     var get = $.get(url, dados, resposta);
     //Executa o done, fail e progress.
     get.then(resposta, function (){resposta('Error')} ,resposta('<img src="img/load.gif" width="20"> Carregando...'));
     
     return false;
     });*/
    
    //Recuperando dados do json.
    /*form.submit(function () {
        //Recupera todos os campos do form.
        var dados = $(this).serialize();
        //Envia dados via get.
        $.get(url, dados,function (res) {
            debug.empty().html(
            "Nome: "+res.nome+"<br>"+
            "Sobre-nome: "+res.sobre+"<br>"
            );
        },'json');
        return false;
    });*/
    
    //Enviando dados com getJson e recuperando os indices do json, em uma lista.
    form.submit(function () {
        //Recupera todos os campos do form.
        var dados = $(this).serialize();
        //Envia dados via get.
        $.getJSON(url, dados,function (res) {
            debug.empty().html("<ul></ul>");
            $.each(res, function (key, values) {
                $('ul').append('<li>'+key+': '+values+'</li>');
            });
        });
        return false;
    });
    
    //Carrega um arquivo com o load.
    /*debug.click(function () {
        $(this).empty().load('../04-Manipuladores-de-conteudo/02-Manipuladores-de-inclusao.php');
    });*/

});