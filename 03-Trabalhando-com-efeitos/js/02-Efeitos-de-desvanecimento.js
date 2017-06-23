$(function () {
    //Apenas inputs com tipo button.
    var input = $(':button');

    //Desaparece com um click
    /*input.click(function () {
     $('.exemplo').fadeOut('slow');
     }).dblclick(function () {
     $('.exemplo').fadeIn('slow');
     });*/

    //Efeito de opacidade.
    /*input.click(function () {
     $('.exemplo').fadeTo('slow',0.5);
     });*/

     //Alterna o efeito de fade.
    /*input.click(function () {
        $('.exemplo').fadeToggle('slow');
    });*/
    
    //Callback, uma ação depende da outra.
    input.click(function () {
        $('.exemplo').fadeTo('slow',0.3, function () {
             $('.exemplo2').fadeTo('slow',0.7);
        });
    });
})