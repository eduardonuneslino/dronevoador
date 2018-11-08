
$(document).ready(function(){

	fLocalInsereMascara();

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
  
		$(".container").css("width", "400px");
		$(".container").css("margin-top", "50px");
		$(".container").css("height", "100%");
	}
	else
	{
		$(".z-depth-2").css("box-shadow", "none");

	}

    $('select').material_select();

	setTimeout(function(){
		//$("input").val("");
		$(".container").show();
		$("#email").focus();
	}, 500);

	$("#bAcessar").click(function(){
		//location.href="pages/dashboard.html";
		fLocalLogar();
		return false;
	});

	$("#bVoltar").click(function(){
		location.reload();
		return false;
	});

	$("#bCadastrar").click(function(){
		$(".loading").css("display", "block");
		fLocalCadastrarUsuario();
		return false;
	});


	$("#tEmailConfirm").change(function(){
		if($(this).val() != $("#tEmail").val()){
			$(".email-validacao").html("E-mails diferentes");
		}
		else
		{
			$(".email-validacao").html("");
		}
	});

	$("#tSenhaConfirm").change(function(){
		if($(this).val() != $("#tSenha").val()){
			$(".senha-validacao").html("Senhas diferentes");
		}
		else
		{
			$(".senha-validacao").html("");
		}
	});
});

function fLocalInsereMascara(){
	$('#tCpf').mask('000.000.000-00');
}


function fLocalLogar(){
	fLocalComunicaServidor("form", "logar-usuario");
}

function fLocalCadastrarUsuario(){

	fLocalComunicaServidor("form", "cadastrar-usuario");
}
function fLocalComunicaServidor(formulario, file){

	var dados = $("form").serialize();

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "php/"+file+".php",
		data: dados,
		success:function(array){

			if(array["funcao"] == "cadastrar-usuario"){
				if(array["status"] == "s"){
					$(".container").hide();
					$("#divConfirmacaoEmail").css("display", "block");
					$(".div-confirmacao-email #email").html("<b>"+$("#tEmail").val()+"</b>");
					$(".loading").css("display", "none");
				}
			}

			else if(array["funcao"] == "login"){

				if(array["status"] == "s"){
					window.sessionStorage.setItem("cpf", array["cpf"]);
					window.sessionStorage.setItem("email", array["email"]);
					window.sessionStorage.setItem("nome", array["nome_completo"]);
					window.sessionStorage.setItem("nome_usuario", array["nome_usuario"]);
					location.href="pages/dashboard.html";
				}
				else
				{
					Materialize.toast('Usuário não cadastrado', 4000);
				}
			}

		},
		error:function(error){

		}
	});
}









