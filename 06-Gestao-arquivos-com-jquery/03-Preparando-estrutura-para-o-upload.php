<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <!--Estilos.-->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
        <title>A ferramenta e os metodos</title>

    </head>
    <body>
        <div class="row">
            <div class="col-md-4">
                <!--Mensagens de debug.-->
                <div class="debug">Debug</div>
                <div class="progress">
                    <div class="barra progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>  
                </div>
                <!--Formulario.-->
                <form name="cadastro-dados" action="" method="post" enctype="multipart/form-data">
                    <div>
                        <label>Arquivo</label>
                        <input type="file" required  name="arquivo" style="margin-bottom: 20px">
                    </div>
                    <div class="form-group">
                        <label>Titulo</label>
                        <input type="text" required name="titulo" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Descricao</label>
                        <textarea name="descricao" required class="form-control"></textarea>
                    </div>
                    <input type="submit" value="Enviar" class="btn btn-success">
                </form>
            </div>
        </div>

        <!--Scripts.-->
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/jquery.form.js" type="text/javascript"></script>
        <script src="js/controller.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
    </body>
</html>
