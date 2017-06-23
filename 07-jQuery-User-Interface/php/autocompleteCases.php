<?php

require '../conexao/conn.php';
require '../conexao/read.php';

//Recupera o indice, pode vim em POST ou em GET.
$acao = ($_POST['acao'] ? $_POST['acao'] : $_GET['acao']);

switch ($acao):
    case'completar':
        //O envio padrao do autocomplete e o json, entao ele ira enviar um indice chamado term.
        $search = filter_input(INPUT_GET, 'term', FILTER_DEFAULT);

        //Busca no banco.
        $readSearch = new read();
        $readSearch->ExeRead('usuarios', "WHERE nome LIKE '%' :nome '%'GROUP BY nome ORDER BY nome ASC", "nome={$search}");

        //Os resultados tem que esta dentro de conchetes.

        $resJson = '[';
        $virgula = true;
        foreach ($readSearch->getResultado() as $res):
            //Se nao existir a virgula acrescenta ela, no ultimo resultado e nem no primeiro recebem.
            if (!$virgula):
                $resJson .= ', ';
            else:
                $virgula = false;
            endif;

            //Atribui os resultados a variavel.
            $resJson .= json_encode($res['nome']);
        endforeach;
        $resJson .= ']';

        //Retorna os resultados.
        echo $resJson;

        break;
    case'pesquisa';
        //O envio padrao do autocomplete e o json, entao ele ira enviar um indice chamado term.
       $search = filter_input(INPUT_GET, 'valor', FILTER_DEFAULT);

        //Busca no banco.
        $readSearch = new read();
        $readSearch->ExeRead('usuarios', "WHERE nome LIKE '%' :nome '%' ORDER BY nome ASC, sobre_nome ASC", "nome={$search}");
        if ($readSearch->getResultado()[0]):
            foreach ($readSearch->getResultado() as $res):
                echo "<li>";
                    echo $res['nome'] . ' ' . $res['sobre_nome'] . ' ' . $res['telefone'];
               echo "</li>";
           endforeach;
       else:
           echo "<li>
                   echo 'Não retornou nenhum resultado';
            </li>";
        endif;
        break;
    default :
        echo 'Faça sua pesquisa amigo?';
endswitch;


