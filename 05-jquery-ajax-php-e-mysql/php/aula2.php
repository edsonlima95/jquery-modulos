<?php
//O json nao retorna tags html, tem que ser o php puro.

$dados = json_encode($_GET);
print_r($dados);
?>