<?php
	
	include 'database.php';
	
	$tUsuarioLogar = $_POST["tUsuarioLogar"];
	$tSenhaLogar = 	 $_POST["tSenhaLogar"];

	$resultado = mysqli_query($con, "SELECT * FROM usuario WHERE email = '$tUsuarioLogar' AND senha = '$tSenhaLogar' AND situacao = 'Liberado'");

	if(mysqli_num_rows($resultado) > 0){

		$array["qtde"] = mysqli_num_rows($resultado);
		$array["status"] = "s";
		$array["funcao"] = "login";

		while($row = mysqli_fetch_assoc($resultado)){
			$array["nome_completo"] = $row["nome_completo"];
			$array["email"] = $row["email"];
			$array["cpf"] = $row["cpf"];
		}

		echo json_encode($array);
	}
	else
	{
		$array["qtde"] = mysqli_num_rows($resultado);
		$array["status"] = "n";
		$array["funcao"] = "login";
		echo json_encode($array);
	}

?>