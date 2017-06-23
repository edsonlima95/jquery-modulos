<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Leitura de dados via Ajax!</title>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="css/05-Leitura-dinamica-de-dados-ajax.css" />

    </head>
    
        <!--Recebe os dados dos usuarios.-->
        <ul class="usuarios"></ul>

        <div class="mais j_read">Carregar Mais</div>

        <div class="lendoartigos">
            <img src="img/load.gif" alt="Carregando" title="Carregando" /> Aguarde, obtendo usuários!
        </div>

        <div class="editar">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                <form name="editar" action="" method="post">
                    <div class="form-group">
                        <span class="campo">Nome:</span>
                        <input type="text" class="form-control" name="nome" />
                    </div>

                    <div class="form-group">
                        <span class="campo">Sobrenome:</span>
                        <input type="text" class="form-control" name="sobre_nome" />
                    </div>

                    <div class="form-group">
                        <span class="campo">E-mail:</span>
                        <input type="text" class="form-control" name="email" />
                    </div>

                    <div class="form-group">
                        <span class="campo">Telefone:</span>
                        <input type="text" class="form-control" name="telefone" />
                    </div>

                    <div class="form-group">
                        <span class="campo">Senha:</span>
                        <input type="text" class="form-control" name="token" />
                    </div>
                    <!--Esse campo servira para identificar o id vindo do banco do usuario na edição..-->
                    <input type="hidden" name="id" />

                    <img src="img/load.gif" width="20" style="margin:8px 0 0 10px; display:none;" class="j_loadboxedit" />
                    <input type="submit" value="Atualizar" class="btn btn-success j_buttom_edit" />	
                    <input type="reset" value="Fechar" class="btn btn-danger j_buttom_close" />
                </form>
            </div>
            </div>
        </div>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/crud.js" type="text/javascript"></script>
    
</html>