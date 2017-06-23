<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title> Lógica de desenvolvimento com jQuery</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <a href="#">link1</a>
        <a href="#" class="back">link2</a>
        <a href="#">link3</a>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
    </body>
    <script>
        $(function () {
            /*
            //Adiciona a cor ao h1.
            $('h1').css("color","#069");
            //Esconde o nome.
            $('h1').hide();
            //Da um atraso de 1s.
            $('h1').delay('1000');
            //Mostra o nome.
            $('h1').fadeIn("slow");*/
        
            //Mesmas funcoes mas em encadeamento, e com outra selecao no final opcional.
            $('h1').css("color","#888").hide().delay('1000').fadeIn('slow').click(function() {
                $('body').css("background-color","#666");
                $('h1').css("color","red");
            });
            
            //O css tbm pode ser passado varios valores com um objeto.
            $('a').css({color: "red", display: "block"});
            
            //Ataca o link com a class.
            $('a.back').css("color", "black");
            
        });
    </script>
</html>
