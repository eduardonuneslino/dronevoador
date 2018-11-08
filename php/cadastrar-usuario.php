<?php
	
	include 'database.php';

	$codigo = md5(uniqid(rand()));
	
	$tCpf = 		 $_POST["tCpf"];
	$tNomeCompleto = $_POST["tNomeCompleto"];
	$tNomeUsuario = $_POST["tNomeUsuario"];
	$tEmail = 		 $_POST["tEmail"];
	$tEmailConfirm = $_POST["tEmailConfirm"];
	$sEstado = 		 $_POST["sEstado"];
	$tCidade = 		 $_POST["tCidade"];
	$tSenha = 		 $_POST["tSenha"];
	$tSenhaConfirm = $_POST["tSenhaConfirm"];

	mysqli_query($con, "INSERT INTO usuario(cpf, nome_completo, nome_usuario, email, estado, cidade, senha, situacao, codigo_confirmacao) VALUES('$tCpf','$tNomeCompleto','$tNomeUsuario','$tEmail','$sEstado','$tCidade','$tSenha', 'Aguardando Confirmacao', '$codigo')");


	include 'mail/enviar-email-confirmacao.php';

	$array["status"] = "s";
	$array["funcao"] = "cadastrar-usuario";

	echo json_encode($array);

?>

