<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Seletores de formulario</title>
    </head>
    <body>
        <form name="teste" action="" method="post">
            <label>
                <span class="tt">Campo de Texto:</span>
                <input type="text" name="texto" disabled="disabled" />
            </label>

            <label>
                <span class="tt">Campo de Password:</span>
                <input type="password" name="texto" />
            </label>

            <label for="checkbox">
                <input type="checkbox" checked="checked" value="1" /> Check 1
                <input type="checkbox" value="2" /> Check 2
            </label>

            <label for="radio">
                <input type="radio" name="radio" checked="checked" value="1" /> Radio 1
                <input type="radio" name="radio" value="2" /> Radio 2
            </label>

            <label>
                <input type="file" name="arquivo" />
            </label>

            <label>
                <select name="teste" class="select">
                    <option value="1">Select</option>
                </select>
            </label>

            <label>
                <input type="submit" value="enviar" />
                <input type="reset" value="limpar" />
            </label>

        </form>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script>
            $(function () {
                //Formatando o form pelo CSS
                $('form').css({
                    width: '500px',
                    height: '400px',
                    'background-color': '#fbfbfb',
                    padding: '10px',
                    margin: '50px auto'
                });

                //Formatando os labels.
                $('label').css({
                    display: 'block',
                    'margin-bottom': '20px'
                });

                //Formatando os spans com a class tt.
                $('.tt').css({
                    display: 'block',
                    'margin-bottom': '5px'
                });

                //Formatando campos individuais por tipo.
                $('form :text, form :password').css({
                    width: '200px',
                    padding: '10px',
                    color: '#fff',
                    'background-color': '#000'
                });

                //Aplicando delay, fadein, hide.
                $('form :text').hide().delay(500).fadeIn('slow');
                $('form :password').hide().delay(1000).fadeIn('slow');
                $('form :checkbox').hide().delay(1500).fadeIn('slow');
                $('form :radio').hide().delay(2000).fadeIn('slow');
                $('form :file').hide().delay(2500).fadeIn('slow');
                $('.select').hide().delay(3000).fadeIn('slow');
                $('form :submit').hide().delay(3500).fadeIn('slow');
                $('form :reset').hide().delay(4000).fadeIn('slow');

                //Placehold no disable
                $('form :disabled').val('Campo desabilitado!');

                //Efeito slideup
                $('form :reset').click(function () {
                    $('form').slideUp(2000);
                });

            });
        </script>
    </body>
</html>
