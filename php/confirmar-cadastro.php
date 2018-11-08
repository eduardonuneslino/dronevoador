<?php

	$codigo = $_GET["code"];

	include 'database.php';

	$resultado = mysqli_query($con, "SELECT * FROM usuario WHERE codigo_confirmacao = '$codigo'");

	if(mysqli_num_rows($resultado) > 0){
		mysqli_query($con, "UPDATE usuario SET situacao = 'Liberado' WHERE codigo_confirmacao = '$codigo'");

		echo "Cadastro confirmado";
		header("Location: /copelmais");
	}
	else{
		echo "Cadastro não confirmado";
	}

?>