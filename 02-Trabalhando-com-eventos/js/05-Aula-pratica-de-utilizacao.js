$(function () {
    //Expressão regular para email.
    var regular = /[a-z0-9_\.\-]@[a-z0-9_\.\-]*[a-z0-9_\.\-]+\.[a-z]{2,4}$/;
    //Esconde as mensagem de erros.

    var error = $('.error').css('display', 'none');

    //Validando pelo click no botão.
    $('.j_btn').click(function () {

        //recupera os valores dos imput.
        var email = $('input[name=email]').val();
        var senha = $('input[name=senha]').val();

        //Desaparece com os erros
        $('.error').fadeOut('fast');

        //Validações.
        if (email == '') {
            //Verifica apenas se não existe o valor.
            $('.email').fadeIn('slow').text('Informe um e-email');
        } else if (!regular.test(email)) {
            //valida se e um valor valido de acordo com a expressão.
            $('.email').fadeIn('slow').text('Informe um e-email valido');
        } else if (senha == '') {
            //Verifica apenas se não existe o valor.
            $('.senha').fadeIn('slow').text('Informe uma senha');
        } else if (senha.length < 5 || senha.length > 15) {
            //valida se e um valor esta entre 5 e 15.
            $('.senha').fadeIn('slow').text('Informe uma senha minino 5 e maximo 15!');
        } else {
            $('input[name=email]').css('background', '#0c6');
            $('input[name=senha]').css('background', '#0c6');
        }

        //Evita o reenvio do formulario.
        return false;
    });

    //Validando pelo blur apenas o email.
    $('input[name=email]').blur(function () {
        //recupera os valores dos imput.
        var email = $('input[name=email]').val();

        //Desaparece com os erros
        $('.error').fadeOut('fast');

        //Validações.
        if (email == '') {
            //Verifica apenas se não existe o valor.
            $('.email').fadeIn('slow').text('Informe um e-email');
        } else if (!regular.test(email)) {
            //valida se e um valor valido de acordo com a expressão.
            $('.email').fadeIn('slow').text('Informe um e-email valido');
        } else {
            $('input[name=email]').css('background', '#0c6');
        }
    });

    //Esconde o a imagem de carregamento, e exibe o formulario.
    $('.carregando').fadeOut(1500, function () {
        $('.form').fadeIn('slow');
    });
});