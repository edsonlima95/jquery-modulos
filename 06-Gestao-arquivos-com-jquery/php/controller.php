<?php

require '../conexao/conn.php';
require '../conexao/create.php';
require '../conexao/read.php';
require '../conexao/delete.php';
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

switch ($dados['acao']):
    case 'cadastro':
        unset($dados['acao']);
        //Armazena o arquivo.
        $arquivo = $_FILES['arquivo'];

        //Armazena a pasta.
        $pasta = '../uploads/';

        //Verifica se existe, se nao cria a pasta.
        if (!file_exists($pasta) && !is_dir($pasta)):
            mkdir($pasta, 0777);
        endif;

        if ($arquivo['tmp_name']):
            //Pega a extencao do arquivo.
            $extencao = strchr($arquivo['name'], '.');
            $nome = md5(time()) . $extencao;

            //Tipos de arquivos aceitos.
            $img = array('.jpg', '.jpeg', '.pjpeg', '.png', '.x-png', '.gif');
            $video = array('.mp3', '.mp4', '.wmv', '.avi');

            //Verifica o tipo, para criar as pastas correspondentes.
            if (in_array($extencao, $img)):
                $pasta = $pasta . 'imagens/';
                $tipo = 'imagens';
            elseif (in_array($extencao, $video)):
                $pasta = $pasta . 'videos/';
                $tipo = 'videos';
            else:
                $pasta = $pasta . 'arquivos/';
                $tipo = 'arquivos';
            endif;

            //Novamente ira verifica se uma dos tipo de pasta existe.
            if (!file_exists($pasta) && !is_dir($pasta)):
                mkdir($pasta, 0777);
            endif;

            //Envia o arquivo.
            if (move_uploaded_file($arquivo['tmp_name'], $pasta . $nome)):
                $create = new create();
                //Seta os dados apos o envio do arquivo.
                $dados['imagem'] = $tipo . '/' . $nome;
                $dados['tipo'] = $tipo;
                $dados['data_creacao'] = date('Y-m-d H:i:s');
                $create->ExeCreate('imagens', $dados);
                echo 1;
            else:
                echo 'Error ao enviar o arquivo!';
            endif;
        else:
            echo 2;
        endif;
        break;
    case 'ler':
        //Tipo de arquivo.
        $tipo = $dados['tipo'];
        //Verifica se o tipo existe ou seja nao e null.
        $read = new read();

        //Condiçao para ler o arquivo pelo tipo.
        if (isset($tipo) == 'tudo'):
            $read->ExeRead('imagens', 'ORDER BY data_creacao DESC');
        elseif ($tipo):
            $read->ExeRead('imagens', "WHERE tipo = :val ORDER BY data_creacao DESC", "val=$tipo");
        endif;

        //Retorna os valores de acordo com o tipo.
        foreach ($read->getResultado() as $resp):
            //Ternario caso seja video ou feli exibe a imagem padrao, se for imagem retorna ela mesmo.
            $imagem = ($resp['tipo'] == 'imagens' ? 'tim.php?src=uploads/' . $resp['imagem'] . '&w=273&h=120' :
                    ($resp['tipo'] == 'arquivos' ? 'img/filethumb.jpg' : 'img/videothumb.jpg'));
            echo '<div class="col-md-3">';
                echo'<li class="file j_' . $resp['id'] . '">';
                    echo'<img src="' . $imagem . '" alt="Baixar arquivo" title="Baixar Arquivo"  class="img-responsive" />';
                        echo'<h2>' . $resp['titulo'] . '</h2>';
                            echo '<p class="desc">' . $resp['descricao'] . '</p>';
                            echo'<p class="data">Enviado em: ' . date('d-m-Y H:i', strtotime($resp['data_creacao'])) . ' h</p>';
                            //Condicao se for img ou video exibe no shadowbox se nao baixa o arquivo.
                            echo '<a href="uploads/' . $resp['imagem'] . '"';
                            if ($resp['tipo'] == 'imagens' || $resp['tipo'] == 'videos'): echo 'rel="shadowbox"';
                            else: 'rel=""';
                            endif;
                    echo'>Veja mais!</a>';
                        echo'<div class="manage">';
                        echo'<a class="actionedit" href="' . $resp['id'] . '"><img src="img/edit.png" alt="" title="" /></a>';
                        echo '<a class="actiondelete" href="' . $resp['id'] . '"><img src="img/delete.png" alt="" title="" /></a>';
                    echo '</div>';
                echo'</li>';
            echo'</div>';
        endforeach;

        break;
    case'deletar';
        $delid = $dados['delid'];
        //Ler o arquivo no banco pelo id.
        $readArq = new read();
        $readArq->ExeRead('imagens', "WHERE id = :id", "id={$delid}");
        //Arquivo
        $arq = $readArq->getResultado()[0]['imagem'];
        //deleleta o arquivo da pasta.
        if (file_exists('../uploads/' . $arq) && !is_dir('../uploads/' . $arq)):
            unlink('../uploads/' . $arq);
        endif;
        //Deleto do banco o arquivo.
        $delete = new delete();
        $delete->ExeDelete('imagens', "WHERE id = :id", "id={$delid}");
        break;
    default:
        echo 'Ocorreu um error, verifique o arquivo!';
endswitch;
?>
   