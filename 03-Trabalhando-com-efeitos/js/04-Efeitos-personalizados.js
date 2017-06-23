$(function () {
    var exemplo = $('.exemplo');

    $('#start').click(function () {
        //Desce ate o fundo.
        exemplo.animate({bottom: '300px'}, 1000);

        /*A fila executa a ação depois que a outra termina, ou seja ao chegar no fundo troca a cor
         * Sem o dequeue a proxima funcao nao e executada.*/
        exemplo.queue(function () {
            //O dequeue e pra termina a instruçao e seguir para a outra.
            $(this).css('background', 'red').dequeue();
        });

        //Desce ate o fundo.
        exemplo.animate({top: '35px'}, 1000);
        
        //Adiciona a cor black a div.
        exemplo.queue(function () {
            //O dequeue e pra termina a instruçao e seguir para a outra.
            $(this).css('background', 'black').dequeue();
        });
        
        exemplo.fadeOut(1500);
        
        //Da um refresh na pagina.
        exemplo.queue(function () {
            location.reload();
            //Redireciona para outra pagina.
            //$(location).attr('href','endereço aqui');
        });
        
        //Evento para para uma funcao da fila.
        $('#stop').click(function () {
            //Elimina o proximo efeito da fila.
            exemplo.clearQueue();
            
            //Para o efeito atual que esta sendo executado e vai pro proximo.
            // exemplo.stop();

            //Para todos os eventos de uma vez, e executa o ultimo.
            // exemplo.finish();
        });

    });
});