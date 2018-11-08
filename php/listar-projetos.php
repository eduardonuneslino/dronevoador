<?php

	include 'database.php';

	$tUsuarioEmail =  $_POST["tUsuarioEmail"];

	//echo "SELECT * FROM projeto_usuario pu INNER JOIN projeto p ON p.id = pu.id_projeto WHERE pu.email_usuario = '$tUsuarioEmail'";

	$resultado_projeto = mysqli_query($con, "SELECT * FROM projeto_usuario pu INNER JOIN projeto p ON p.id = pu.id_projeto WHERE pu.email_usuario = '$tUsuarioEmail'");

	$i = 0;
	while($row_projeto = mysqli_fetch_assoc($resultado_projeto)){

		$retorno['status'] = "s";
		$retorno['funcao'] = "listar-projetos";
		$id_projeto = $retorno['projeto'][$i]["id"] = $row_projeto['id'];
		$retorno['projeto'][$i]["nome_projeto"] = $row_projeto['nome_projeto'];
		$retorno['projeto'][$i]["descricao"] = $row_projeto['descricao'];
		$retorno['projeto'][$i]["imagem"] = $row_projeto['imagem'];
		$retorno['projeto'][$i]["situacao"] = $row_projeto['situacao'];
		$retorno['projeto'][$i]["usuario"] = $row_projeto['usuario'];
		$retorno['projeto'][$i]["mentor"] = $row_projeto['mentor'];
		$retorno['projeto'][$i]["campanha"] = $row_projeto['campanha'];
		$retorno['projeto'][$i]["organizacao"] = $row_projeto['organizacao'];
		$retorno['projeto'][$i]["dataHora"] = $row_projeto['dataHora'];

		$resultado_participante = mysqli_query($con, "SELECT * FROM projeto_usuario pu INNER JOIN usuario u ON pu.email_usuario = u.email WHERE id_projeto = $id_projeto");
		$j = 0;
		while($row_participante = mysqli_fetch_assoc($resultado_participante)){
			$retorno['projeto'][$i]["participante"][$j]['email'] = $row_participante['email_usuario'];
			$retorno['projeto'][$i]["participante"][$j]['status'] = $row_participante['status'];
			$retorno['projeto'][$i]["participante"][$j]['nome_usuario'] = $row_participante['nome_usuario'];
			$j++;
		}

		$i++;
	}





	echo json_encode($retorno);
?>