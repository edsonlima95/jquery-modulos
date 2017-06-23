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
                <!--Mensagens de debug.-->
                <div class="debug">
                    <strong style="color: #FFF;">CADASTRO.</strong>
                    <div class="msg" style="margin-top: 10px">
                    </div>
                </div>

                <!--Formulario.-->
                <form name="cadastro" action="" method="post">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" name="nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Sobre nome</label>
                        <input type="text" name="sobre_nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" name="senha" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Telefone</label>
                        <input type="text" name="telefone" class="form-control">
                    </div>
                    <button type="button" class="btn btn-success j_send">Enviar</button>
                </form>
            </div>
        </div>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/crud.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
    </body>
</html>
