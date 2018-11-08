<?php
	
	include 'database.php';
	
	$tUsuarioEmail =  $_POST["tUsuarioEmail"];
	$tIdConfirmacaoAceiteProjeto =  $_POST["tIdConfirmacaoAceiteProjeto"];
	$tIdProjeto =  $_POST["tIdProjeto"];
	$tNomeProjeto =  $_POST["tNomeProjeto"];
	$tIdNovidade =  $_POST["tIdNovidade"];
	$tEmailOrigem =  $_POST["tEmailOrigem"];

	mysqli_query($con, "INSERT INTO novidade(origem, destinatario, titulo, descricao, tipo, id_projeto, situacao) VALUES('$tUsuarioEmail','$tEmailOrigem','Convite de Projeto Recusado','O usuário <b> ".$_POST["tUsuarioEmail"]."</b> recusou o convite para participar do projeto <b>".$tNomeProjeto."</b>','recusa-convite-projeto', $tIdProjeto, false)");
	
	mysqli_query($con, "UPDATE projeto_usuario SET status = 'recusado' WHERE id_projeto = ".$tIdProjeto." AND email_usuario = '".$tUsuarioEmail."'");


	$retorno["status"] = "s";
	$retorno["funcao"] = "recusar-convite-projeto";

	echo json_encode($retorno);

?>