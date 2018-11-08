<?php
	
	include 'database.php';
	
	$tProjetoAtual =  $_POST["tProjetoAtual"];
	$tDescricaoProjetoAtual =  $_POST["tDescricaoProjetoAtual"];
	$tUsuarioEmail =  $_POST["tUsuarioEmail"];
	$tUsuarioDestinatario =  $_POST["tUsuarioDestinatario"];
	$titulo = "Convite para Projeto";
	$descricao = "O usuário <b>".$_POST["tUsuarioEmail"]."</b> está lhe convidando para participar do projeto <b>".$tDescricaoProjetoAtual."</b>";

	$descricao .= '<br><br> <div> <button email_origem="'.$tUsuarioEmail.'" id_projeto="'.$tProjetoAtual.'" nome_projeto="'.$tDescricaoProjetoAtual.'" class="btn waves-effect waves-light aceitar"> aceitar </button> <button email_origem="'.$tUsuarioEmail.'" id_projeto="'.$tProjetoAtual.'" nome_projeto="'.$tDescricaoProjetoAtual.'" class="btn waves-effect waves-light recusar"> Recusar </button> </div>';


	//echo "INSERT INTO novidade(origem, destinatario, titulo, descricao, tipo, situacao) VALUES('$tUsuarioEmail','$tUsuarioDestinatario','$titulo','$descricao','convite-projeto',false)";

	mysqli_query($con, "INSERT INTO novidade(origem, destinatario, titulo, descricao, tipo, id_projeto, situacao) VALUES('$tUsuarioEmail','$tUsuarioDestinatario','$titulo','$descricao','convite-projeto', $tProjetoAtual, false)");

	//echo "INSERT INTO projeto_usuario(email_usuario, id_projeto, status) VALUES('$tUsuarioEmail',$tProjetoAtual, 'aguardando aceite')";

	mysqli_query($con, "INSERT INTO projeto_usuario(email_usuario, id_projeto, status) VALUES('$tUsuarioDestinatario',$tProjetoAtual, 'aguardando aceite')");

	$retorno["status"] = "s";
	$retorno["funcao"] = "convidar-participante-interno";

	echo json_encode($retorno);




?>