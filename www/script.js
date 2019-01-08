$(document).ready( function(){
	var mostrou  = false;
//oculta preloader quando o iframe é carregado
$("#my_iframe").on("load" , function(){
        $("#layer").hide('slow')
        mostrou = true;
        // //click link empreendimentos
        // $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").click(function(){
        // 	var link = $("#my_iframe").contents().find("#nossas-redes-sociais .imagem").attr('href')
        // 	navigator.app.loadUrl( link, { openExternal:true } );
        // })

        // //click buuton login facebook
        // $("#my_iframe").contents().find(".nav-item .face").click( function(){
        //     var link = $("#my_iframe").contents().find(".nav-item .face").attr('href');
        //     navigator.app.loadUrl( link, { openExternal:true } );  
        // })   
  })

	if(mostrou){
		 $("#layer").css("display", "none")
	}

     function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        window.location.href = "/index.html";
    }

	
})