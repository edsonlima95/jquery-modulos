$(function () {
    var form = $('form[name=cadastro-dados]');
    var debug = $('.debug');

    //Envio do form normal, sem o plugin o jquery não envia arquivos.
    /*form.submit(function () {
     $.ajax({
     data: $(this).serialize(),
     type: 'POST',
     url: "php/controller.php",
     success: function (dados) {
     debug.empty().html('<pre>'+dados+'</pre>');
     }
     });
     return false;
     });*/

    //Envio do form com o plugin.
    form.submit(function () {
        //apenas a url e o success tem que ser setado.
        $(this).ajaxSubmit({
            url: "php/controller.php",
            data: {acao: 'cadastro', envia: 'true'},
            //target: loader,
            //type: 	"GET"
            beforeSerialize: function () {
                debug.empty().text("Obtendo dados.");
            },

            beforeSubmit: function () {
                debug.empty().text('Carregando...');
            },

            //clearForm: true LIMPA
            resetForm: true, //REAJUSTA os valores dos campos.
            dataType: null, //XML, json, script

            error: function () {
                debug.empty().text('Erro ao enviar');
            },

            success: function (sucesso) {
                debug.empty().html('<pre>' + sucesso + '</pre>');
            },

            //Depois que executar o sucesso, executa o completo
            complete: function () {
                debug.append('Concluido..');
            },
            
            //Progresso de envio em porcentagem.
            uploadProgress: function (evento, posicao, total, porcentoCompleto) {
                debug.html(porcentoCompleto);
            }
        });

        return false;
    });
});

