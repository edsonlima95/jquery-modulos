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
            .carregando {width: 400px; padding: 20px; background-color: #065}
            .carregando img {float: left; margin-right: 10px; width: 20px;}
            form {padding: 10px; background-color: #fbfbfb; width: 350px;}
            form input {margin: 10px 0px}
        </style>
    </head>
    <body>
        <!--Imagem.-->
        <div class="carregando">
            <img src="img/load.gif" alt="carregando"> Carregando...
        </div>

        <!--Fromulario.-->
        <div class="form" style="display: none">
            <form>
                <label>
                    <div class="filed">Email</div>
                    <input type="text" name="email">
                    <span class="error email">Error email</span>
                </label>
                <label>
                     <div class="filed">Senha</div>
                     <input type="password" name="senha">
                    <span class="error senha">Error email</span><br>
                </label>
                <input type="submit" name="enviar" class="j_btn" value="Enviar">
            </form>
        </div>
        
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/05-Aula-pratica-de-utilizacao.js" type="text/javascript"></script>
    </body>
</html>
