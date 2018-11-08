<?php
	
	include 'database.php';
	
	$tUsuarioEmail =  $_POST["tUsuarioEmail"];

	//echo "SELECT * FROM novidade WHERE destinatario = '$tUsuarioEmail'";

	$resultado = mysqli_query($con, "SELECT * FROM novidade WHERE destinatario = '$tUsuarioEmail' ORDER BY dataHora DESC");

	$i = 0;
	while($row = mysqli_fetch_assoc($resultado)){

		$retorno['status'] = "s";
		$retorno['funcao'] = "listar-novidades";
		$retorno['novidade'][$i]["id"] = $row['id'];
		$retorno['novidade'][$i]["origem"] = $row['origem'];
		$retorno['novidade'][$i]["destinatario"] = $row['destinatario'];
		$retorno['novidade'][$i]["titulo"] = $row['titulo'];
		$retorno['novidade'][$i]["descricao"] = $row['descricao'];
		$retorno['novidade'][$i]["tipo"] = $row['tipo'];
		$retorno['novidade'][$i]["id_projeto"] = $row['id_projeto'];
		$retorno['novidade'][$i]["situacao"] = $row['situacao'];
		$retorno['novidade'][$i]["dataHora"] = $row['dataHora'];
		$i++;
	}

	$retorno["funcao"] = "listar-novidades";

	echo json_encode($retorno);




?>