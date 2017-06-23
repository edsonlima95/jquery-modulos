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
        <style>
            body {height: 1500px}
            span {display: block; width: 300px; margin: 10px 0px; cursor: pointer}
            .debug { text-align: center; background-color: #065; margin-bottom: 10px; width: 300px; padding: 10px; color: #fff}
            .scroll {background: rgba(0,0,0, 0.5); width: 30px; height: 28px;
            border-radius: 50%; padding: 6px; cursor: pointer; position: fixed; top: 50%
            }
            .scroll p {margin: 2px}
            .ativo {color: #000; font-weight: bold}
        </style>
    </head>
    <body>

        <div class="debug">Debug!</div>

        <span style="background: #065">Primeira span</span>
        <span style="background: blue">Segunda span</span>
        <span style="background: blueviolet">Primeira span</span>

        <input type="button" value="Altura e largura">

        <div class="scroll"><p>Top</p></div>

        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/05-Propriedades-de-estilo-1.js" type="text/javascript"></script>
    </body>
</html>
