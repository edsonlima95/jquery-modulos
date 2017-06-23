$(function () {
    var form = $('form[name=cadastro-dados');
    var debug = $('.debug');
    
    //Barra de progresso.
    var barra = $('.progress');
    var porcentoBarra = $('.barra');
    //Esconde a barra.
    barra.css({display:'none','margin-bottom':'0px'});

    form.submit(function () {
        //Enviando pelo plugin com o ajaxSubmit.
        $(this).ajaxSubmit({
            url: 'php/controller.php',
            data: {acao: 'cadastro'},
            //Antes do envio, coloca o gif de carregar na debug.
            beforeSubmit: function () {
                debug.empty().html('<img src="img/load.gif" alt="carregando dados..." title="carregando dados...">Caregando...');
            },
            error: function () {
                debug.empty().html('Error ao tentar enviar')
            },
            //Limpa os campos caso seja enviado.
            resetForm: true,
            
            //O uploadProgess e reposavel pela porcentagem do envio dos dados, e obrigado todos esses parametros.
            uploadProgress: function (evento, posicao, total, completo) {
                //Desses parametro so o ultimo que interessa, mas eles tem queser passados.
                barra.fadeIn('fast');
                var porcentagem = completo + '%';
                porcentoBarra.width(porcentagem).text(porcentagem);
            },
            success: function (res) {
                if(res == 1){
                     debug.empty().text('Arquivo enviado com sucesso!').css({background:'green',color: '#fff'});
                }
            }
        });
        return false;
    });

});
