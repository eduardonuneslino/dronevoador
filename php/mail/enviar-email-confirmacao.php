
 <?php

	date_default_timezone_set('Etc/UTC');
	require 'PHPMailerAutoload.php';

	$message = '<img src="https://uploaddeimagens.com.br/images/001/713/195/original/copel.png?1541629564" width="200"/> <br><br>';
	$message .= 'Por favor, clique no link abaixo para confirmar seu cadastro no Copel+. <br><br>';
    $message .= '<a href="http://172.30.55.179/copelmais/php/confirmar-cadastro.php?code='.$codigo.'">Confirmar E-mail</a>';

	$mail= new PHPMailer;
	$mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 0;       // 0 = não mostra o debug, 2 = mostra o debug (mensagens de erro)
	$mail->SMTPAuth = true;     // Autenticação ativada
	$mail->SMTPSecure = 'ssl';  
	$mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 465; 
	$mail->Username = 'eduardo.nunes.lino'; // eu sempre usei gmail 
	$mail->Password = 'ppgia@2017';
	$mail->SetFrom('eduardo.nunes.lino@gmail.com', 'Copel+');
	$mail->addAddress($tEmail,'');
	$mail->Subject = "Confirmação de cadastro no Copel+";
	$mail->msgHTML($message);
       
	$mail->send();

?>





