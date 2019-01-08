$(document).ready( function(){
	var mostrou  = false;
//oculta preloader quando o iframe é carregado
$("#my_iframe").on("load" , function(){
        $("#layer").hide('slow')
        mostrou = true;
        //click link empreendimentos
        $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").click(function(){
        	var link = $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").attr('href')
        	navigator.app.loadUrl( link, { openExternal:true } );
        })

        //click buuton login facebook
        $("#my_iframe").contents().find(".btn_face").click(function(){
            var link = $("#my_iframe").contents().find(".face").attr('href')
            navigator.app.loadUrl( link, { openExternal:true } );
            return false;
        })
		   
  })

	if(mostrou){
		 $("#layer").css("display", "none")
	}

	
})