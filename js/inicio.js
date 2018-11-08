$(document).ready(function(){



	$('body').on('click', '[data-action="drawer"]', function() {
    $(this).closest('.card').toggleClass("active");

	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	     $(".card").css("width", "90%");
	    }

	});


	fLocalListarNovidades();

	fLocalCarregaDadosDashboard();
});

function fLocalCarregaDadosDashboard(){
	var nome = window.sessionStorage.getItem("nome");

	if(nome != "" && nome != null && nome != undefined){
		$("#labelNomeCompleto").html(window.sessionStorage.getItem("nome"));
	}
	else{
		//location.href="/copelmais";
	}
}

function fLocalCarregaQtdeNovidades(){
	
}


function fLocalListarNovidades(){
	fLocalLimpaCorpoPagina();
	$("#menu-projeto").hide();
	$("#TituloMenuSuperior").html("Novidades");
	$(".classFeed").show();
	$(".classFeed").load("../pages/novidades.html");

	return false;
}

function fLocalListarProjetos(){
	fLocalLimpaCorpoPagina();
	$("#menu-projeto").show();
	$("#TituloMenuSuperior").html('Projetos');
	$(".classCampanha").show();
	$(".classCampanha").load("../pages/projetos.html");

	$("#cads").click(function(){
		//alert("oi");
	});

	return false;
}

function fLocalListarFases(){
	fLocalLimpaCorpoPagina();
	$("#TituloMenuSuperior").html("Campanha Copel+ &nbsp; : &nbsp; Projeto IV");
	$(".classFases").show();
	$(".classFases").load("../pages/fases.html");
	return false;
}

function fLocalListarUsuario(){
	fLocalLimpaCorpoPagina();
	$("#TituloMenuSuperior").html("Dados do Usuário");
	$(".classUsuario").show();
	$(".classUsuario").load("../pages/usuario.html");
	return false;
}

function fLocalLimpaCorpoPagina(){
	$(".classFases").html("");
	$(".classFases").hide();
	$(".classUsuario").html("");
	$(".classUsuario").hide();
	$(".classCadastrarProjeto").html("");
	$(".classCadastrarProjeto").hide();
	$(".classCampanha").html("");
	$(".classCampanha").hide();
	$(".classFeed").html("");
	$(".classFeed").hide();
}





