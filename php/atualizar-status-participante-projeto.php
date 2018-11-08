<?php
	
	include 'database.php';
	
	$tUsuarioEmail =  $_POST["tUsuarioEmail"];
	$tIdConfirmacaoAceiteProjeto =  $_POST["tIdConfirmacaoAceiteProjeto"];
	$tIdProjeto =  $_POST["tIdProjeto"];
	$tNomeProjeto =  $_POST["tNomeProjeto"];
	$tIdNovidade =  $_POST["tIdNovidade"];
	$tEmailOrigem =  $_POST["tEmailOrigem"];

	if($tIdConfirmacaoAceiteProjeto == "S"){

		$descricao = 'O usuário <b>'.$tEmailOrigem.'</b> está lhe convidando para participar do projeto <b>'.$tNomeProjeto.'</b><br><br> <p style="color:green;"> <b> Aceito </b> </p>';

		//cho "UPDATE projeto_usuario SET status = 'aceito' AND descricao = '".$descricao."' WHERE id_projeto = ".$tIdProjeto." AND email_usuario = '".$tUsuarioEmail."'";

		mysqli_query($con, "UPDATE projeto_usuario SET status = 'aceito' WHERE id_projeto = ".$tIdProjeto." AND email_usuario = '".$tUsuarioEmail."'");

		mysqli_query($con, "UPDATE novidade SET descricao = '".$descricao."' WHERE id = ".$tIdNovidade);
	}
	else if($tIdConfirmacaoAceiteProjeto == "N"){

		$descricao = 'O usuário <b>'.$tEmailOrigem.'</b> está lhe convidando para participar do projeto <b>'.$tNomeProjeto.'</b><br><br> <p style="color:red;"> <b> Recusado </b> </p>';

		mysqli_query($con, "UPDATE projeto_usuario SET status = 'recusado' WHERE id_projeto = ".$tIdProjeto." AND email_usuario = '".$tUsuarioEmail."'");

		mysqli_query($con, "UPDATE novidade SET descricao = '".$descricao."' WHERE id = ".$tIdNovidade);
	}

	$retorno["status"] = "s";
	$retorno["funcao"] = "atualizar-status-participante-projeto";

	echo json_encode($retorno);

?>