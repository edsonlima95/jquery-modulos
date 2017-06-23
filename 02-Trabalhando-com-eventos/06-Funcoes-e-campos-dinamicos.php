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
            .exemplo {width: 400px; padding: 10px; background-color: #065;}
            input {margin: 10px 0px; display: block}
        </style>
    </head>
    <body>
        <?php
        if (!empty($_POST)):
            echo '<pre>';
            var_dump($_POST);
            echo '</pre>';
        endif;
        ?>

        <div class="exemplo">DEBUG</div>


        <form action="" method="post" enctype="multpart/form-data" name="campos-dinamicos">
            <input type="text" name="texto[]">
           
            <div class="campos"></div>
            <div>
                <button type="button" class="j_disparar">Dispare</button>
                <button type="button" class="j_adicionar">+</button>
                <button type="button" class="j_file">file</button>
            </div>
        </form>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/06-Funcoes-e-campos-dinamicos.js" type="text/javascript"></script>
    </body>
</html>
