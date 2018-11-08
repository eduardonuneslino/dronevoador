
$(document).ready(function(){
    $("#tUsuarioEmail").val(window.sessionStorage.getItem("email"));
   	fLocalComunicaServidor('form', 'listar-novidades');

   	

   	

});

function fLocalMontaNovidade(index, novidade){

	var html = '';

	if(novidade['situacao'] == "0"){
		html += '<li id="'+novidade['id']+'" id_projeto="'+novidade['id_projeto']+'" class="feed-item" data-content="&#xf27b;" data-time="'+novidade['dataHora']+'" data-color="blue">';
		html += '<section>';
		html += '<input type="checkbox" id="expand_'+index+'" name="expand_'+index+'" />';
		html += '<label for="expand_'+index+'" style="font-size:14px !important; height: auto !important; padding-left: 0px !important;">';
		html += '<b>'+ novidade['origem'] +' &nbsp;&nbsp;<br> <label style="font-size:11px;"> '+ novidade['titulo'] +' </label></b>';
		html += '</label>';
		html += '<main class="content">';
		html += novidade['descricao'];
		html += '</main>';
		html += '</section>';
		html += '</li>';
	} else if(novidade['situacao'] == "1"){
		html += '<li id="'+novidade['id']+'" id_projeto="'+novidade['id_projeto']+'" class="feed-item" data-content="&#xf27b;" data-time="'+novidade['dataHora']+'" data-color="gray">';
		html += '<section>';
		html += '<input type="checkbox" id="expand_'+index+'" name="expand_'+index+'" />';
		html += '<label for="expand_'+index+'" style="font-size:14px !important; height: auto !important; padding-left: 0px !important;">';
		html += novidade['origem'] +' &nbsp;&nbsp;<br> <label style="font-size:11px;"> '+ novidade['titulo'] +' </label>';
		html += '</label>';
		html += '<main class="content">';
		html += novidade['descricao'];
		html += '</main>';
		html += '</section>';
		html += '</li>';
	}

	$(".activity-feed").append(html);
}

function fLocalAtualizaSituacaoNovidade(id){

	$("#tIdNovidade").val(id);
	fLocalComunicaServidor("form", "atualizar-situacao-novidade");
}

function fLocalAtualizaStatusParticipanteProjeto(id, nome, id_novidade, origem, aceite){

	$("#tIdConfirmacaoAceiteProjeto").val(aceite);
	$("#tIdProjeto").val(id);
	$("#tNomeProjeto").val(nome);
	$("#tEmailOrigem").val(origem);
	$("#tIdNovidade").val(id_novidade);

	$("#tUsuarioEmail").val(window.sessionStorage.getItem("email"));
	fLocalComunicaServidor("form", "atualizar-status-participante-projeto");

	if(aceite == "N"){
		fLocalComunicaServidor("form", "recusar-convite-projeto");
	}
}



function fLocalComunicaServidor(formulario, file){

  var dados = $(formulario).serialize();

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/"+file+".php",
    data: dados,
    success:function(array){
      if(array["funcao"] == "listar-novidades"){
        if(array["status"] == "s"){
        	for(var i = 0; i < array['novidade'].length; i++)
        	{
        		fLocalMontaNovidade(i, array['novidade'][i]);
        	}

        	$(".feed-item").unbind("click");
        	$(".feed-item").click(function(){
		   		if($(this).attr("data-color") == "blue"){
		   			fLocalAtualizaSituacaoNovidade($(this).attr("id"));
		   		}
		   	});	

        	$(".aceitar").unbind("click");
		   	$(".aceitar").click(function(){
		  
		   		fLocalAtualizaStatusParticipanteProjeto($(this).attr("id_projeto"), $(this).attr("nome_projeto"), $(this).parent().parent().parent().parent().attr("id"), $(this).attr("email_origem"), "S");
		   		$(this).parent().html("<p style='color:green;'> <b> Aceito </b> </p>");
			});

			$(".recusar").unbind("click");
		   	$(".recusar").click(function(){
		   		
		   		fLocalAtualizaStatusParticipanteProjeto($(this).attr("id_projeto"), $(this).attr("nome_projeto"), $(this).parent().parent().parent().parent().attr("id"), $(this).attr("email_origem"), "N");
		   		$(this).parent().html("<p style='color:red;'> <b> Recusado </b> </p>");
			});
		
			
        }
      }
    }
  });
}
