$(function () {
    var exemplo = $('strong');
     
     //Adiciona a class off ao strong.
     exemplo.click(function () {
     $(exemplo).toggleClass('off');
     });
     
     //Com o PrependTo ele retorna um elemento existente pra dentro de outro, 
     $(':button:eq(0)').click(function () {
     exemplo.prependTo('.exemplo');
     });
     
     //Detach esconde o elemento, mas nao remove e uma especie de hide, mantem o dom ou seja
     //o efeito aplicado antes dele.
     $(':button:eq(1)').click(function () {
     exemplo.detach();
     });
     
     //remove, remove um elemento nao mantem o dom ou seja perde o efeito toggle
     $(':button:eq(2)').click(function () {
     exemplo.remove();
     });
     
     //empty, esvazia um elemento.
     $(':button:eq(3)').click(function () {
     exemplo.empty();
     });

   
});