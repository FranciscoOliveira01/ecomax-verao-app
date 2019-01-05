$(document).ready( function(){
	var mostrou  = false;
//oculta preloader quando o iframe é carregado
$("#my_iframe").on("load" , function(){
        $("#layer").hide('slow')
        mostrou = true;

        $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").click(function(){
        	var link = $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").attr('href')
        	navigator.app.loadUrl( link, { openExternal:true } );
        })
		   
  })

	if(mostrou){
		 $("#layer").css("display", "none")
	}

	
})