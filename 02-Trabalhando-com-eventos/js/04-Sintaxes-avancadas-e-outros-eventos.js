$(function () {
    var count = 0;
    var ex = $('.exemplo');

    //Encadeando contagem.
    /*$('.j_input').focus(function () {
     count++;
     ex.text($(this).val() + ' - ' + count);
     }).mouseover(function () {
     count++;
     ex.text($(this).val() + ' - ' + count);
     }).keyup(function () {
     count++;
     ex.text($(this).val() + ' - ' + count);
     });*/

    //Com o bind pode colocar todos os eventos de uma vez.
    /*$('.j_input').bind('focus mouseover keyup', function () {
     count++;
     ex.text($(this).val() + ' - ' + count);
     });*/

    //Usando uma funcao com o bind.
    function contar() {
        count++;
        ex.text($(this).val() + ' - ' + count);
    }
    //Aqui a funcao sera para todas
    /*$('.j_input').bind('focus keyup mouseover', contar);
     
     
     $('.j_input').bind('focus keyup mouseover', function () {
     if (count >= 10) {
     //Para de funcionar os dois eventos
     $('.j_input').unbind('focus mouseover', contar);
     
     //Para de excutar todos os eventos.
     $('.j_input').unbind();
     }
     });
     */

    //Acoes diferentes para cada evento com o bind.
    /*$('.j_input').bind({
        focus: function () {
            ex.text('Você executou um focus');
        }, blur: function () {
            ex.text('Você executou um blur');
        }, keyup: contar
    });*/

    ///Usando o bind com funcoes.
    function dafocus() {
        ex.text('Focus');
    }
    function dablur() {
        ex.text('Blur');
    }
    
    function escrever() {
        ex.text($(this).val());
    }
    
    $('.j_input').bind({
        keyup: escrever,
        mouseover: contar,
        focus: dafocus,
        blur: dablur
    });
});