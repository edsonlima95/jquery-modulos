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
        <title></title>
    </head>
    <body>
        <div class="row">
            <div class="col-md-4">
                <div class="debug">Debug</div>
                <form name="cadastro" action="" method="post">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" name="nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Sobre nome</label>
                        <input type="text" name="sobre" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Telefone</label>
                        <input type="text" name="telefone" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/03-Interfaces-de-baixo-nivel.js" type="text/javascript"></script>
    </body>
</html>
