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
            form {width: 420px; background-color: #ccc; padding: 10px}
            label, span {display: block; padding: 5px}
            .exemplo {background-color: blue; padding: 20px; text-align: center; color: #fff; width: 400px}
        </style>
    </head>
    <body>
       <div class="exemplo">Esperando ação</div>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name="nome" class="j_place j_ch" title="Informe seu nome">
            </label>
            <label>
                <span>Nome:</span>
                <input type="text" name="idade">
            </label>
            <label>
                <span>Nome:</span>
                <textarea name="conteudo"></textarea>
            </label>
            <input type="submit" name="enviar" value="send">
            <button type="button" name="enviar" >Ok</button>
        </form>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/03-Eventos-de-teclado-e-formulario.js" type="text/javascript"></script>
    </body>
</html>
