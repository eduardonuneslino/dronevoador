 
var global_usuarios_cadastrados = new Array();

 
  fLocalDefineDispositivo();
  

  var objeto;



$(document).ready(function(){

    $("#tUsuarioEmail").val(window.sessionStorage.getItem("email"));

    fLocalListaProjetos();

    
    //alert(window.sessionStorage.getItem("email"));

    fLocalComunicaServidor('form', 'pesquisar-usuarios');
    
    $("#bCadastrarProjeto").click(function(){
      fLocalCadastrarProjeto();
      return false;
    });

});


function fLocalCadastrarProjeto(){
  fLocalLimpaCordpoPagina();
  $(".classCadastrarProjeto").show();
  $(".classCadastrarProjeto").load("../pages/cadastrar-projeto.html");


  return false;
}



function fLocalLimpaCordpoPagina(){
  $(".classFases").html("");
  $(".classFases").hide();
  $(".classCadastrarProjeto").html("");
  $(".classCadastrarProjeto").hide();
  $(".classCampanha").html("");
  $(".classCampanha").hide();
  $(".classFeed").html("");
  $(".classFeed").show();
}


function fLocalListaProjetos(){

    fLocalComunicaServidor('form', 'listar-projetos');

}
   

function fLocalMontaCardProjeto(projeto){

    var html = '<li class="carousel__card">';
    html += '<div style="position: relative;">';
    html += '<div class="card_cabecalho">';
    html += '<div class="card-titulo-campanha" ></div>';
    html += '</div>';
    html += '<div id_projeto="'+projeto["id"]+'" nome_projeto="'+projeto["nome_projeto"]+'" class="card_cabecalho-participantes title-card-participantes" style="margin-bottom: 20px;">';
    html += projeto["nome_projeto"];
    html += '</div>';
    html += '<div class="card-projeto-descricao">';
    html += '<table width="100%">';
    html += '<tr>';
    html += '<td width="100%" class="card-projeto-descricao-conteudo"> ';
    html += projeto["descricao"];
    html += '</td>';
    html += '</tr>';
    html += '</table>';
    html += '</div>';
    html += '<label class="title-card-participantes">Participantes </label><br>';
    html += '<div class="card_cabecalho-participantes" style=" width: 100%;">';
    html += '<div class="card-header-participantes card-projeto-descricao" style="height: 180px !important; ">';


    for(var i = 0; i < projeto['participante'].length; i++){

        if(projeto['participante'][i]['status'] != "recusado")
        {
            html += '<div style="float: left;">';
            html += '<table>';
            html += '<tr>';
            html += '<td>';
            html += '<center>';
            html += '<img src="../images/user-no-image.png" width="50">';
            html += '</center>';
            html += '</td>';
            html += '</tr>';
            html += '<tr>';
            html += '<td class="card-participante-nome" >';
            html += '<center>';
            html += projeto['participante'][i]['nome_usuario'];

            if(projeto['participante'][i]['status'] == "aceito"){
                 html += '<img src="../images/status-accept.png" width="26">';
            }
            else{
              html += '<img src="../images/status-alert.png" width="26">';
            }
           
            html += '</center>';
            html += '</td>';
            html += '</tr>';
            html += '</table>';
            html += '</div>';


            
        }

        if(window.sessionStorage.getItem("email") == projeto['participante'][i]['email']){
            if(projeto['participante'][i]['status'] == "aguardando aceite" || projeto['participante'][i]['status'] == "recusado"){
              return;
            }
        }
        
    }
    


    html += '</div>';
    html += '</div>';
    html += '<div class="card_cabecalho-participantes">';
    html += '<label class="title-card-participantes"> Mentor </label><br>';
    html += '<div class="card-header-participantes">';


    
    html += '<div style="float: left;">';
    html += '<table>';
    html += '<tr>';
    html += '<td>';
    html += '<center>';
    html += '<img src="../images/user-no-image.png" width="50">';
    html += '</center>';
    html += '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td class="card-participante-nome" >';
    html += '<center> Nenhum Mentor convidado &nbsp;';
    html += '</center>';
    html += '</td>';
    html += '</tr>';
    html += '</table>';
    html += '</div>';
    


    html += '</div>';
    html += '</div>';
    html += '<div class="card-menu-rodape" >';
    html += '<table width="100%" cellspacing="11">';
    html += '<tr>';
    html += '<td width="20%" class="card-menu-add-user">';
    html += '<img src="../images/person-add.png" width="22"> ';
    html += '</td>';
    html += '<td width="20%">';
    html += '<img src="../images/page-find.png" width="25"> ';
    html += '</td>';
    html += '<td width="20%">';
    html += '<img src="../images/chart-radar.png" width="27"> ';
    html += '</td>';
    html += '<td width="20%">';
    html += '<img src="../images/edit.png" width="22"> ';
    html += '</td>';
    html += '<td width="20%">';
    html += '<img src="../images/log.png" width="25"> ';
    html += '</td>';
    html += '</tr>';
    html += '</table>';
    html += '</div>';
    html += '<div class="card-reveal-add-user" style="display: none;">';
    html += '</div>';
    html += '</div>';
    html += '</li>';

    $(".carousel__cards").append(html);

} 


function fLocalDefineDispositivo(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      
    $(".carousel__card").css("width", ($(".classCampanha").width()-25)+"px");

    $(".previous").click(function(){
      $('.carousel__cards').animate( { scrollLeft: '-='+(parseInt($(".classCampanha").width())+10) }, 350);
    });

    $(".next").click(function(){
      $('.carousel__cards').animate( { scrollLeft: '+='+(parseInt($(".classCampanha").width())+10) }, 350);
    });
  }
  else
  {
    $(".carousel__card").css("width", "400px");

    $(".previous").click(function(){
      $('.carousel__cards').animate( { scrollLeft: '-=405' }, 350);
    });

    $(".next").click(function(){
      $('.carousel__cards').animate( { scrollLeft: '+=405' }, 350);
    });
  }
}

function fLocalEvetonsCardProjeto(){
  $(".card-menu-add-user").click(function(){

    $("#tProjetoAtual").val($(this).closest("div:has(*[id_projeto])").find("[id_projeto]").attr("id_projeto"));
    $("#tDescricaoProjetoAtual").val($(this).closest("div:has(*[nome_projeto])").find("[nome_projeto]").attr("nome_projeto"));

    //alert($(this).closest("div:has(*[id_projeto])").find("[id_projeto]").attr("id_projeto"));
    //$("#tProjetoAtual").val($(this).parent().parent().parent().parent().parent());

    $(".mdl-layout__content").scrollTop(0);

      $(this).parent().parent().parent().parent().parent().find('.card-reveal-add-user').css("display", "block");
      $(this).parent().parent().parent().parent().parent().find('.card-reveal-add-user').animate( { "margin-top": '0' }, 500, function(){
      
          var html = $("#janelaAddUser").html();
          $(this).parent().parent().parent().parent().parent().find('.card-reveal-add-user').html(html);
          objeto = $(this).parent().parent();


          $(".bConvidarParticipanteInterno").unbind("click");
          $(".bConvidarParticipanteInterno").click(function(){
            
              fLocalEnviarConvite($(this));

              return false;
          });
          
          setTimeout(function(){

              $('input.autocomplete').autocomplete({
                data: global_usuarios_cadastrados,
              });

              $(".card-close").unbind("click");
              $(".card-close").click(function(){
                //console.log($(objeto).html());

                //alert($(this).parent().parent().parent().parent().parent().parent().height());
                  $('.card-reveal-add-user').animate( { "margin-top": parseInt($(this).parent().parent().parent().parent().parent().parent().height())+5 }, 500, function(){
                    $(this).css("display", "none");
                  });
              });

            }, 500);
      });
  });


  var size = parseInt($(".card-reveal-add-user").parent().parent().parent().height())+5;
  $('.card-reveal-add-user').css("margin-top", size+"px");

  $(".carousel__card").hover(function() {
    $(this).toggleClass('scale-up').siblings().toggleClass('scale-down');
  });
}
 
function fLocalEnviarConvite(objeto){
    $("#tUsuarioDestinatario").val($(objeto).parent().parent().find("#tEmailDestinatarioInterno").val());
    fLocalComunicaServidor('form', 'convidar-participante-interno');
}


function fLocalComunicaServidor(formulario, file){

  var dados = $(formulario).serialize();

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/"+file+".php",
    data: dados,
    success:function(array){
      if(array["funcao"] == "pesquisar-usuarios"){
        if(array["status"] == "s"){
          for(var i = 0; i < array['usuarios'].length; i++){
            global_usuarios_cadastrados[array['usuarios'][i]['email']] = null;
          }
        }
      } else if(array["funcao"] == "listar-projetos"){
        if(array["status"] == "s"){
            
            for(var i = 0; i < array['projeto'].length; i++){
              fLocalMontaCardProjeto(array['projeto'][i]);
            }

            fLocalDefineDispositivo();
            fLocalEvetonsCardProjeto();
        }
      } else if(array["funcao"] == "convidar-participante-interno"){
        if(array["status"] == "s"){
            alert("participante convidado");
           // sem código
        }
      }
    }
  });
}






