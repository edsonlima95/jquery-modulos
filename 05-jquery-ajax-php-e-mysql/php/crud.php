<?php
//Importar as classes.
require '../conexao/conn.php';
require '../conexao/create.php';
require '../conexao/read.php';
require '../conexao/delete.php';
require '../conexao/update.php';

sleep(1);

//Recebe os dados, e valida o tipo da ação.
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

//Swicth do CRUD.
switch ($dados['acao']):
    //Case de cadastro.
    case 'cadastro':
        if (in_array('', $dados)):
            echo 1; //Retorna um para o tipo de erro no jquery.
        else:
            //Elimina o campo acao
            unset($dados['acao']);
            //Seta os valores.
            $dados['data_create'] = date('Y-m-d H:i:s');
            $dados['token'] = $dados['senha'];
            $dados['senha'] = md5(base64_encode($dados['senha']));

            //Crea o usuario na tabela.
            $create = new create();
            $create->ExeCreate('usuarios', $dados);
            if (!empty($create->getResultado())):
                echo $create->getResultado();
            else:
                echo 2;
            endif;
        endif;
        break;
    //Leitura dos dados.
    case'ler':
        //Limit e offset vindo dos dados enviados via ajax.
        $limit = $dados['limit'];
        $offset = $dados['offset'];

        //Leitura dos dados.
        $read = new read();
        $read->ExeRead('usuarios', "ORDER BY nome DESC LIMIT :limit OFFSET :offset", "limit={$limit}&offset={$offset}");
        if ($read->getResultado()):
            //Seta os valores nas li que sera mandado para o callback do ajax no case ler.
            foreach ($read->getResultado() as $res):
                echo '<li class= j_' . $res['id'] . '>
                    <h3>' . $res['nome'] .' '. $res['sobre_nome']. '</h3>
                    <div class="contatos">
                        <div class="email"><a href="mailto:falecom@upinside.com.br">' . $res['email'] . '</a></div>
                        <div class="telefone">' . $res['telefone'] . '</div>
                    </div><!-- /contatos -->

                    <div class="manage">
                        <div id=' . $res['id'] . ' class="btnaction edit j_edit"><img src="img/edit.png" alt="Editar" title="Editar" /></div>
                        <div id=' . $res['id'] . ' class="btnaction delete j_delete"><img src="img/delete.png" alt="Excluir" title="Excluir" /></div>
                    </div><!-- /manage -->        
                </li>';
            endforeach;
        else:
            //3 não retornou resultados.
            echo 3;
        endif;
        break;

    case 'deletar':
        //Recupera o indice del que tem o id como valor.
        $id = $dados['del'];

        //Executa a exclusão.
        $delete = new delete();
        $delete->ExeDelete('usuarios', "WHERE id = :id", "id={$id}");
        break;
    case 'consultar':
        //Recupera o indice edit que tem o id como valor.
        $idconsulta = $dados['cons'];
        //Executa a leitura do usuario pelo id para edicao.
        $readUsuario = new read();
        $readUsuario->ExeRead('usuarios', "WHERE id = :id", "id={$idconsulta}");
        //Retorna um json com o rsultado.
        echo json_encode($readUsuario->getResultado()[0]);
        break;
    case 'editar':
        //Elimina o campo acao
        unset($dados['acao']);
        //Seta os valores.
        $dados['data_create'] = date('Y-m-d H:i:s');
        $dados['token'] = $dados['token'];
        $dados['senha'] = md5(base64_encode($dados['token']));
        
        //Esse id esta vindo do input hidden que armazena o id do usuario na hora que e setado os dados nos campos.
        $editid = $dados['id'];
       
        //Executa a edição do usuario pelo id.
        $editaUsuario = new update();
        $editaUsuario->ExeUpdate('usuarios', $dados, "WHERE id = :id", "id={$editid}");
        echo json_encode($dados);
        break;
    default:
        echo 2;
endswitch;
?>
 