<?php
	
	include 'database.php';
	
	$tNomeProjeto =  $_POST["tNomeProjeto"];
	$tDescricao = 	 $_POST["tDescricao"];
	$tOrganizacao =  $_POST["tOrganizacao"];
	$tUsuarioEmail =  $_POST["tUsuarioEmail"];

	//echo "INSERT INTO projeto(nome_projeto, descricao, imagem, situacao, usuario, mentor, campanha, organizacao) VALUES('$tNomeProjeto','$tDescricao','','Em desenvolvimento','$tUsuarioEmail','',0,0)";

	mysqli_query($con, "INSERT INTO projeto(nome_projeto, descricao, imagem, situacao, usuario, mentor, campanha, organizacao) VALUES('$tNomeProjeto','$tDescricao','','Em desenvolvimento','$tUsuarioEmail','',0,0)");

	//echo mysqli_insert_id($con);

	$id_projeto = mysqli_insert_id($con);

	//echo "INSERT INTO projeto_usuario(email_usuario, id_projeto) VALUES('$tUsuarioEmail', $id_projeto)";

	mysqli_query($con, "INSERT INTO projeto_usuario(email_usuario, id_projeto, status) VALUES('$tUsuarioEmail',$id_projeto, 'aceito')");

	$retorno["status"] = "s";
	$retorno["funcao"] = "cadastrar-projeto";

	echo json_encode($retorno);


	

?>