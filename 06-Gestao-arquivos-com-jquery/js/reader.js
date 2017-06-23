$(function () {

    //GERAIS
    var modal = $('.editar');
    var menu = $('.menu li a');
    var conteudo = $('.lista');
    var loader = $('.loading');

    //Escondendo os elementos.
    modal.hide();
    loader.hide();

    //Recupera o valor href do link com o hash.
    var local = window.location.hash;
    //Retira o # do link.
    var local = local.replace('#', '');
    if (!local) {
        local = 'tudo';
    }

    //Vai pega o click do link, ou seja o conteudo do href.
    menu.click(function () {
        var local = $(this).attr('href');
        //Retira o # do link.
        var local = local.replace('#', '');
        if (local != 'cadastro') {
            //Executa a funcao, "local" vem do link do menu passado na url.
            lerdados(local);
        } else {
            modal.slideDown('slow');
            //Quando for cadastro não pode fica o nome cadastro na url ex #cadastro,
            // tem que fica so dos outros links, return false previne
            return false;
        }
    });

    //Fecha o modal.
    $('.closemodal').click(function () {
        //Recupera o valor href do link com o hash.
        var local = window.location.hash;
        //Retira o # do link.
        var local = local.replace('#', '');
        //Executa a funcao, "local" vem do link do menu passado na url.
        lerdados(local);
        //Fecha o modal.
        modal.slideUp('slow');
        return false;
    });

    //Funcao que enviara os dados para o php, cada ver que for executada.
    function lerdados(local) {
        //Envio via ajax.
        $.ajax({
            url: 'php/controller.php',
            type: 'POST',
            data: 'acao=ler&tipo=' + local,
            error: function () {
                alert('Error ao ler dados');
            },
            beforeSend: function () {
                conteudo.fadeOut('slow');
                loader.fadeIn('slow');
            },
            success: function (res) {
                conteudo.empty().append(res);
                conteudo.fadeIn('fast');
            },
            complete: function () {
                loader.fadeOut('fast');
            }
        });
    }

    //Executa a funcao, essa local vem do link do menu.
    lerdados(local);

    //Edita os arquivos.
    conteudo.on('click', '.actionedit', function () {
        alert('Editar');
        return false;
    });
    
    //Deleta os arquivos
    conteudo.on('click', '.actiondelete', function () {
        var iddelete = $(this).attr('href');
        var li = conteudo.find('li[class*="j_' + iddelete + '"]');
        //Enviar os dados.
        $.ajax({
            url: 'php/controller.php',
            type: 'POST',
            data: 'acao=deletar&delid=' + iddelete,
            beforeSend: function () {
                li.css('background', '#FCC');
            },
            success: function (res) {
                //Ao deletar, desaparece com o arquivo e faz a leitura novamente.
                li.fadeOut('slow', function () {
                    //Recebe a href da url novamente, para atualizar a listagem.
                    var local = window.location.hash;
                    var local = local.replace('#', '');
                    //Executa a leitura novamete apos a exclusão.
                    lerdados(local);
                });
            }
        });
        return false;
    });

    //Tenho que pegar o rel que tem o shadowbox para manipula.
    conteudo.on('click', 'a[rel*="shadowbox"]', function () {
        //Funcao do shadowbox que executa a acao, ou seja vou manda abrir o elemento clicado.
        Shadowbox.open(this);
        return false;
    });

    //Inicia o shadowbox.
    Shadowbox.init();

});

