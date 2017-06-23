$(function () {
    //Apenas o p selecionado ira receber o evento, os p´s adicionados não.
    /*$('p').click(function () {
        $('body').append('<p>Click novamente</p>');
    });*/
    
    //Com o ON, todo elemento recebe o evento.
//    var c = 0;
//    $('body').on('click','p',function () {
//         c++;
//         $('body').append('<p>Click novamente'+c+'</p>');
//         if(c == 5){
//             //Quando for igua a 5 o off cancela o evento on
//             $('body').off('click','p');
//         }
//    });
    
    //passando varios eventos ao on.
    $('body').on({
        click: function () {
            $('body').append('<p>Click</p>');
        },mouseover: function () {
            $('body').append('<p>Mouseover</p>');
        }
    },'p');//Se nao passa o elemento qualquer um do body executa o evento.
    
   
    //ONE so executa uma vez.
    /*$('p').one('click',function () {
        $('body').append('<p>Click</p>');
    });*/
});