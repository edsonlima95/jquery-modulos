<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <a href="#" rel="up1">Link1</a>
        <a href="#" rel="up2">Link2</a>
        <a href="#up" rel="up3" title="upinside">Link3</a>


        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script>
            $(function () {
                //Atacando pelos atributos, rel, href
                $('a[rel]').css({display: 'block', 'margin-bottom': '10px'});
                $('a[href]').css({color: 'red'});

                //Atacando todos que tiver href e uma #.
                $('a[href="#"]').css('font-size', '30px');

                //Atacando todos que tiver href e o valor up, basta passar um *.
                $('a[href*="up"]').css('color', 'green');

                //Atacando todos que title e o valor upinside, basta passar um *.
                $('a[title*="upinside"]').click(function () {
                    $('a[title*="upinside"]').delay(500).fadeOut();
                });
            });
        </script>
    </body>
</html>
