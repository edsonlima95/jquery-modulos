$(function () {

    var ex = $('.exemplo');

    //hide.
    $('.j_hide').click(function () {
        ex.hide('slow');
    });

    //show
    $('.j_show').click(function () {
        ex.show('slow');
    });

    //Toggle.
    $('.j_toggle').click(function () {
        ex.toggle('slow');
    });

    //Evento keyup como efeitos.
    $(':text').keyup(function () {
        var t = $(this).val();

        if (t == 'hide') {
            ex.hide('slow');
        } else if (t == 'show') {
            ex.show('slow');
        } else if (t == 'toggle') {
            ex.toggle('slow');
        } else {
            ex.text(t);
        }
    });
})