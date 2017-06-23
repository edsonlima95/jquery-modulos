$(function () {
    //$('.j_date').datepicker();

    //ESTRUTURA E ESTILOS.

    //height das boxs.
    $('.bloco').each(function () {
        var alturaJanela = $(window).height();
        altura = alturaJanela - 110;
        $(this).css('min-height', altura);
    });

    /*************************************************
     *NAVEGAÇÃO
     *************************************************/
    //Acora com scroll no menu.
    $('.nav li a').click(function () {
        //Recupera a ancora do link.
        var ancora = $(this).attr('href');
        //Posição da ancora na pagina.
        var posicao = $(ancora).position().top;

        //Srcoll ate o link na posicao que ele se encontra em relacao a pagina.
        $('html, body').animate({scrollTop: posicao}, 1000);

        return false;
    });

    /*************************************************
     ********            WIDGETS           ***********
     *************************************************/

    /**********************
     * ACCORDION.
     *********************/

    $('.accordion').accordion({
        active: false, //Identifica qual aba vira aberta se false todas vem fechadas.
        collapsible: true, //Permite abrir e fechar as abas clicando.
        //Tem mais opcoes na documentacao.
    });

    //AUTO-COMPLETE.
    var resultados = $('.resultados');

    resultados.hide().html("<h1>Carregando...</h1>");

    //Executando o autocomplete.
    $('.j_autocomplete').autocomplete({
        //Envia a palavra digitada no campo, para completar.
        source: 'php/autocompleteCases.php?acao=completar',
        //Envia para retornar os resultados da palavra.
        select: function (event, ui) {
            //Pega o valor digitado no campo e envia para a pesquisa e nao pro completar.
            var valor = ui.item.value;
            //Envia via ajax.
            $.ajax({
                url: 'php/autocompleteCases.php',
                data: 'acao=pesquisa&valor=' + valor,
                success: function (res) {
                    resultados.fadeTo(500, 0.5, function () {
                        $(this).html(res).fadeTo(500, 1);
                    });
                }
            });
        }
    });

    /****************
     *BOTÕES.
     ****************/

    //Apenas adicona stilos para o botao, todos podem ser configurados como na documentacao.
    $('#button input:submit').button();
    $('#button input:button').button().click(function () {
        alert('ok')
    });

    //Check box.
    $('#button .gchecks').buttonset();
    $('#button .gradios').buttonset();

    /************************
     *DATEPICKER.  
     ***********************/

    //Configuraões simples.
    $('.j_datepicker').datepicker({
        //Configurações.
        showAnim: "bounce", //Efeito de exibição
        showOtherMonths: true, //Mostra os primeitos dias do outro mes.
        selectOtherMonths: false, //Abilita as selecao dos outros dias mostrados.
        showButtonPanel: true, //Mostra a o botao hoje, e o fechar.
        changeMonth: false, //Abilita um select com os meses para selecionar.
        changeYear: false, //Abilita um select com os anos para selecionar.
    });

    //Mais configuraões.
    $('.j_datepickerout').datepicker({
        //Configurações.
        showAnim: "bounce", //Efeito de exibição
        showOtherMonths: true, //Mostra os primeitos dias do outro mes.
        selectOtherMonths: true, //Abilita as selecao dos outros dias mostrados.
        showButtonPanel: true, //Mostra a o botao hoje, e o fechar.
        changeMonth: true, //Abilita um select com os meses para selecionar.
        changeYear: true, //Abilita um select com os anos para selecionar.
        showOn: "button", //Mostra um botao ao lado do campo de selecao da data.
        buttonImage: 'img/calendar.png', //Coloca uma imagem no botao.
        buttonImageOnly: true, //Exibe apenas a imagem e nao com botao..
        altField: '.alternate', //Adiciona a data em outro campo.
        altFormat: 'DD, d MM, yy', //Muda o formato da data.
        minDate: '-30', //Permite selecionar apenas um mes antes da data atual.
        maxDate: '+30', //Permite selecionar apenas um mes depois da data atual.
    });
    //Mudando o css do botao.
    $('.ui-datepicker-trigger').css({padding: '8px 0 7px 8px', background: '#fff', float: 'left'});

    /************************
     * MODAIS E CALLBACKS
     *************************/

    //Mostra uma caixa de dialogo com o conteudo do primeiro P.
    //$('#modais p:first').dialog();

    //Adiciona os estilos pros botoes.
    $('#modais button').button();

    //EX1:
    //Quando clica no meno do modal ir aparece a caixa de texto com o conteudo.
    $('#modais p:first').hide();
    $('.nav li a').click(function () {
        if ($(this).attr("href") == "#modais") {
            var retorno = $('#modais p:first').html();
            $('#modais').prepend('<p>' + retorno + '</p>');
            $('#modais p:first').hide();
            window.setTimeout(function () {
                $('#modais p:first').dialog();
            }, 1100);
        }
    });

    //EX2:
    //Abri uma janela com o texto da div selecionada.
    $('.dial').dialog({
        autoOpen: false,
        //Cria um botao com a funcao close.
        buttons: {
            "Fechar": function () {
                $(this).dialog("close");
            }
        }
    });

    //Abri o modal no click.
    $('#modais .abrir').click(function () {
        $('.dial').dialog('open');
    });


    //EX3
    var atack = $("#modais .deletar");
    atack.dialog({
        //configurações.
        modal: true,
        autoOpen: false, //Define se o modal ira ser auto aberto.
        show: 'bounce', //Efeito do modal na exibição.
        hide: 'explode', //Efeito de explosão quando fecha o modal.
        buttons: {//Criando botoes.
            "Quero deletar": function () {
                alert('Você Deletou!');
                $(this).dialog('close');//Fecha o modal ao clicar em confirmar, e exibe o alert depois.
            },
            "Cancelar": function () {
                $(this).dialog('close');//Apenas fecha o modal.
            }
        }
    });
    //Abri o modal no click do confirmar.
    $('#modais .confirmar').click(function () {
        atack.dialog('open');
    });

    //EX4
    var erro = $('.errocaixa');
    erro.dialog({
        modal: true,
        autoOpen: false,
        show: 'bounce', //Efeito ao abrir
        hide: 'explode', //Efeito ao fechar
        buttons: {//Cria o botao de fechar ao clicar.
            "Ok": function () {
                $(this).dialog('close');
            }
        }
    });
    //Abri o modal mostrando o error.
    $('#modais .erro').click(function () {
        erro.dialog('open');
    });

    /**********************************
     * MENUS E BARRA DE PROGRESSO.   
     **********************************/

    //Executa o metodo menu do jquery ao menu.
    //$('.menuui').menu();  
    $('.menuui').menu({
        icons: {submenu: "ui-icon-circle-triangle-e"},
        position: {my: "left+2 top", at: "right top"}
    });

    //Barra de progresso.1
    $('.progresso').progressbar({
        value: 50
    });

    //Barra de progresso.2
    $('.progresso2').progressbar({
        value: 75
    });
});