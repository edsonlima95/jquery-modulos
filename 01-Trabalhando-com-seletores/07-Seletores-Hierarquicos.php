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
        <div class="exemplo">
            <h2>H2 dentro do exemplo</h2>
            <p>P1 de dentro do exemplo <span>span dentro do p</span></p>
            <span>span dentro do exemplo</span>
        </div>
        <h2>H2 fora do exemplo</h2>
        <p class="p1">P1 fora do exemplo</p>
        <p class="p2">P2 fora do exemplo</p>
        <p class="p3">P3 fora do exemplo</p>

        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script>
            $(function () {
                //SELETORES.
                $('h2').css('margin','0');
                $('p').css({margin: '0',color:'blue'});
                $('.exemplo').css({'background-color':'#ccc','margin-bottom':'20px'});
                
                //Atacando a span dentro do p.
                $('.exemplo span').hide().delay('1000').fadeIn(1000).css('color','red');
                $('.exemplo h2').css('font-size','30px');
                
                //Atacando a span fora do p, o > indica a primeira filha por isso nao pega a span de dentro do p.
                $('.exemplo > span').css('color','green');
                
                //Ataca o segundo elemento P apos o selecionado com o +.
                $('.p1 + p').css({color: 'yellow','font-size':'20px'});
                
            });
        </script>
    </body>
</html>
