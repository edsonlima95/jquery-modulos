<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Estudo de caso 1: Leitor em abas</title>
        <!--Estilos.-->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>;
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <link rel="stylesheet" type="text/css" href="js/shadowbox/shadowbox.css">
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
                <style type="text/css">
                    *{margin:0; padding:0; font-family:Verdana, Geneva, sans-serif;}
                </style>
                </head>
                <body class="readerbody">
                    <div id="reader" class="container" >
                        <!--Modal.-->
                            <div class="row">
                                <div class="col-md-3 col-md-offset-4 editar">
                                    <!-- Mensagens de debug.-->
                                    <div class="debug">Debug</div>
                                    <div class="progress">
                                        <div class="barra progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>  
                                    </div>
                                    <!--Formulario.-->
                                    <form name="cadastro-dados" action="" method="post" enctype="multipart/form-data">
                                        <div>
                                            <label>Descição</label>
                                            <input type="file" required class="form-control" name="arquivo" style="margin-bottom: 20px; border: 0px; padding: 0px">
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
                                        <input type="button" value="Cancelar" class="btn btn-danger closemodal">
                                    </form>
                                </div>
                            </div><!--Fim: Modal.--> 
                        <header>
                            <img src="img/logohub.png" alt="Sistema de arquivos" title="Sistema de arquivos" class="img-responsive" />
                        </header>
                        <!--Menu.-->
                        <nav class="menu navbar navbar-inverse">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu-colapso">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="menu-colapso">
                                <ul class="nav navbar-nav">
                                    <li><a class="nav" href="#cadastro">Cadastrar Mais</a></li>
                                    <li><a class="nav" href="#tudo">Ver Tudo</a></li>
                                    <li><a class="nav" href="#arquivos">Ver Arquivos</a></li>
                                    <li><a class="nav" href="#imagens">Ver Imagens</a></li>
                                    <li><a class="nav" href="#videos">Ver Vídeos</a></li>
                                </ul>
                            </div>
                        </nav>
                        <!--Fim: Menu.-->
                      
                        <div class="loading"><img src="img/load.gif" alt="Carregando..." title="Carregando..." /> Aguarde, carregando informações!</div>
                        
                        <!--Conteudo.-->
                        <ul class="lista row">
                         <!--As li do controller sera enviada para aqui com o append.-->
                        </ul><!--Fim: Conteudo.-->
                    
                    </div>
                    <!--Scripts.-->
                    <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
                    <script src="js/jquery.form.js" type="text/javascript"></script>
                    <script src="js/controller.js" type="text/javascript"></script>
                    <script src="js/reader.js" type="text/javascript"></script>
                    <script src="js/shadowbox/shadowbox.js" type="text/javascript"></script>
                    <script src="js/bootstrap.min.js" type="text/javascript"></script>
                </body>
                </html>