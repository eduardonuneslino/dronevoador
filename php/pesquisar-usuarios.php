<?php

	include 'database.php';

	$tUsuarioEmail =  $_POST["tUsuarioEmail"];

	$resultado = mysqli_query($con, "SELECT * FROM usuario WHERE email != '$tUsuarioEmail'");

	$i = 0;
	while($row = mysqli_fetch_assoc($resultado)){

		$retorno['status'] = "s";
		$retorno['funcao'] = "pesquisar-usuarios";
		$retorno['usuarios'][$i]["email"] = $row['email'];
		$i++;
	}

	echo json_encode($retorno);
?>