$(function () {
    //GERAIS
    var msg = $('.msg');
    var forms = $('form');//Encapsula todos os forms.
    var button = $('.j_send');//Encapsula o botao, caso o usuario nao tenha o javascript.
    var url = 'php/crud.php';

    //Seta o tipo para submit caso o usuario nao tenha o javascript.
    button.attr("type", "submit");

    //Da um fadeout toda vez que enviar.
    forms.submit(function () {
        //Ao clicar em enviar esconde as mensagens.
        msg.fadeOut('fast');
        return false;
    });

    //Funcões GERAIS, servira para todos.
    function carregando() {
        msg.empty().html('<div class="alert alert-info"><img src="img/load.gif">Aguarde carregando...<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>').fadeIn('fast');
    }

    function erroSistema() {
        msg.empty().html('<div class="alert alert-danger">Error no sistema,por favor contate o admin...<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>').fadeIn('fast');
    }

    //Funcões GENERICAS.
    function erroDados(mensagem) {
        msg.empty().html('<div class="alert alert-info">' + mensagem + '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>').fadeIn('fast');
    }

    function sucesso(mensagem) {
        msg.empty().html('<div class="alert alert-success">' + mensagem + '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>').fadeIn('fast');
    }

    //Seta as funcoes padroes, todas os envios serão post.
    $.ajaxSetup({
        type: 'POST',
        url: url,
        beforeSend: carregando,
        error: erroSistema
    });

    //Seta o form que sera enviado os dados.
    var cadastro = $('form[name=cadastro]');

    //OBS:Sempre eu tenho que passar uma a acao=tipo.

    /***********************************************
     * CADASTRA USUARIOS.
     **********************************************/

    cadastro.submit(function () {
        var dados = $(this).serialize();
        //Encapsulo o tipo da acao.
        var acao = "&acao=cadastro";
        //Junto aos dados o tipo da acao.
        var enviar = dados + acao;

        $.ajax({
            data: enviar,
            success: function (res) {
                if (res == 1) {
                    //1 Se tiver compos em branco, erro de dados.
                    erroDados('Campos em branco, por favor preencha todos os campos!');
                } else if (res == 2) {
                    //2 e erro no codigo.
                    erroSistema();
                } else {
                    //Executa a func sucesso.
                    sucesso("Seu cadastro foi efetuado com sucesso" + res);
                }
            },
            complete: function () {
                //Mesma coisa do llocation do php.
                // location.href="http://www.google.com";
                //Limpa os campos.
                cadastro.find('input:text, email, password');
            }
        });
    });

    /************************************************
     * LEITURA DE USUARIOS.
     *************************************************/
    //GERAIS, dados vindo do arquivo de leitura-dinamica.
    var usuarios = $('.usuarios');
    var mais = $('.mais');
    var carregando = $('.lendoartigos');

    //Esconde o ler mais e os usuarios.
    usuarios.empty();
    mais.hide();

    /*Essa funcão cada vez que ela e executada, ela faz a leitura dos usuarios
     *esse funcao e fundamental para o carregar-mais funcionar pois cada
     *vez que for clicado ele ira carregar essa funcao mudando apenas o offset para carregar os usuarios corretamente sem repeti-los*/
    function carregarUsuarios(data) {
        $.ajax({
            data: data,
            //Sobre-escreve o beforeSend e o error padrao do ajaxSetup.
            beforeSend: '',
            error: '',
            success: function (leitura) {
                if (leitura != 3) {
                    //Recebe os dados da leitura, e adiciona nos usuarios.
                    usuarios.append(leitura);
                    //Desaparece com o carregando.
                    carregando.fadeOut('fast');
                    mais.delay(500).fadeIn('fast');
                } else {
                    mais.text('Não a resultados encontrados, recarregar a pagina!').click(function () {
                        location.reload();
                    });
                    //Desaparece com o carregando.
                    carregando.fadeOut('fast');
                }
            }
        });
    }//Fim da funcao.
    //Executa a funcão.
    carregarUsuarios("acao=ler&offset=0&limit=2");
    //Seta o offset.
    var offset = 2;
    //Executa o carregar mais.
    mais.click(function () {
        //cada vez que clicar executa a funcão novamenta e altera o offset para os usuarios não serem listados repetidos.
        carregando.fadeIn('fast');
        //Executa a funcão.
        carregarUsuarios("acao=ler&offset=" + offset + "&limit=2");
        offset += 2;
    });

    /************************************************
     * EXCLUSÃO DE USUARIOS.
     *************************************************/
    //O evento on ele atribui o click ao dom ou seja para todos as li, se fosse so o click ele nao atribuia.
    usuarios.on('click', '.j_delete', function () {
        //Recupera o id do usuario.
        var id = $(this).attr("id");
        var dados = "&acao=deletar&del=" + id;
        //Recupera a li clicada.
        var liclicada = $('li[class="j_' + id + '"]');

        //Envio dos dados.
        $.ajax({
            data: dados,
            beforeSend: '',
            error: '',
            success: function () {
                liclicada.fadeOut('slow');
            }
        });
    });

    /************************************************
     * CONSULTA DE USUARIOS PARA EDITAR.
     *************************************************/
    //Pirmeiro faz a leitura dos dados do usuario, seta no form para depois editar.
    //GERAIS.
    var fechar = $('.j_buttom_close');
    var formmodal = $('form[name=editar]');

    //li clicada.
    usuarios.on('click', '.j_edit', function () {
        //Recupera o id do usuario.
        var editid = $(this).attr("id");
        //Consult o usuario pelo id.
        var consulta = "acao=consultar&cons=" + editid;
        //Recuper o id da li clicada.
        var liclicada = $('li[class="j_' + editid + '"]');

        $.ajax({
            data: consulta,
            dataType: 'json',
            beforeSend: function () {
                $('.editar').fadeIn('slow');
            }, //Exibe o fundo preto com a img carregando.
            error: '',
            success: function (res) {
                //Percorre os campos, e seta os valores.
                $.each(res, function (key, values) {
                    formmodal.find('input[name=' + key + ']').val(values);
                });
            },
            complete: function () {
                formmodal.fadeIn('slow');
            }//Exibe o formulario.
        });
    });
    //Fecha o formulario.
    fechar.click(function () {
        $('.editar').fadeOut('slow');
    });

    /************************************************
     * EDICÃO DE USUARIOS
     *************************************************/
    //Envia o formulario com os dados ja setados pelo metodo consulta.
    formmodal.submit(function () {
        //Recuperar os dados.
        var campos = $(this).serialize();
        var acao = "&acao=editar";
        var dados = campos + acao;
        //Recupera o id do campo hidden.
        var idcampo = $(this).find('input[name=id]').val();
         //Recuper o id da li clicada.
        var liclicada = $('li[class="j_' + idcampo + '"]');
        
        $.ajax({
            data: dados,
            dataType: 'json',
            beforeSend: function () {
                $('.j_loadboxedit').fadeIn('fast');
            },
            error: '',
            success: function (atualizacao) {
                 $('.j_loadboxedit').fadeOut('slow');
                 //Seta os valores atualizados.
                 liclicada.find('h3').text(atualizacao.nome + ' ' + atualizacao.sobre_nome);
                 liclicada.find('.email').text(atualizacao.email);
                 liclicada.find('.telefone').text(atualizacao.telefone);
            }
        });

    });
});