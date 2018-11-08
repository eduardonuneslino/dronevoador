<?php
	
	include 'database.php';
	
	$tIdNovidade =  $_POST["tIdNovidade"];

	mysqli_query($con, "UPDATE novidade SET situacao = true WHERE id = ".$tIdNovidade);

	$retorno["status"] = "s";
	$retorno["funcao"] = "atualizar-situacao-novidade";

	echo json_encode($retorno);

?>