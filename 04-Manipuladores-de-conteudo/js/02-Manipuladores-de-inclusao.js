$(function () {
    var exemplo = $('.exemplo');

    //Adiciona conteudo antes do elemento selecionado.
    $(':input[value=Prepend]').click(function () {
        exemplo.prepend("<p>Prepend insere conteudo antes!</p>");
    });
    
    //Adiciona conteudo depois do elemento selecionado.
    $(':input[value=Append]').click(function () {
        exemplo.append("<p>Prepend insere conteudo depois!</p>");
    });

    //Adiciona um conteudo para dentro de um elemento selecionado.
    $(':input[value=PrependTo]').click(function () {
        $('#antes').prependTo(exemplo);
    });
    
    //Adiciona um conteudo para dentro de um elemento selecionado.
    $(':input[value=AppendTo]').click(function () {
        $('#depois').appendTo(exemplo);
    });
    
    //Adiciona o texto digitado.
    $(':input').keyup(function () {
        exemplo.text($(this).val());
    });
    
    //Adiciona o texto digitado e reconhece tags html.
    $(':input').keyup(function () {
        exemplo.html($(this).val());
    });
    
    exemplo.click(function () {
        $(this).before('<p>Before insere conteudo antes tambem!</p>');
        $(this).after('<p>After insere conteudo depois tambem!</p>');
    });
});