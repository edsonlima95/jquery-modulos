$(function () {
    var form = $('form[name=cadastro-dados]');
    var debug = $('.debug');
    
    //Formas de envio do plugin.
    
    /*form.ajaxForm(function () {
        alert('Enviou');
    });*/
    
    /*form.submit(function () {
        $(this).ajaxSend({
            success: alert('oi')
        });
        return false;
    });*/
    
    form.submit(function () {
        //Faz a configutacao.
        var config = {
            success:  alert('Deu certo')
        }
        
        //Envia o form.
        $(this).ajaxSend(config);
        return false;
    });
});
