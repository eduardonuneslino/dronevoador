$(document).ready(function(){

	//$('select').material_select();

	$("#bGravar").click(function(){
		fLocalCadastrarProjeto();
		return false;
	});

});


function fLocalCadastrarProjeto(){

	fLocalComunicaServidor("formulario-cadastrar-projeto", "cadastrar-projeto");
}

function fLocalComunicaServidor(formulario, file){

	var dados = $("form").serialize();

	console.log(dados);

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/"+file+".php",
		data: dados,
		success:function(retorno){

		

		},
		error:function(error){

		}
	});
}
