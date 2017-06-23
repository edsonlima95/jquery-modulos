<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
        <title>A ferramenta e os metodos</title>
        
    </head>
    <body>
       <div class="row">
            <div class="col-md-4">
                <!--Mensagens de debug.-->
                <div class="debug">Debug</div>

                <!--Formulario.-->
                <form name="cadastro-dados" action="" method="post">
                    <div class="form-group">
                        <label>Titulo</label>
                        <input type="text" name="nome" class="form-control">
                    </div>
                    <div>
                        <label>Descição</label>
                        <textarea name="descricao" class="form-control" style="margin-bottom: 20px"></textarea>     
                    </div>
                   
                    <input type="submit" value="Enviar" class="btn btn-success">
                </form>
            </div>
        </div>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/jquery.form.js" type="text/javascript"></script>
        <script src="js/01-A-ferramenta-e-os-metodos.js" type="text/javascript"></script>
    </body>
</html>
