$(document).ready( function(){
	//oculta preloader quando o iframe é carregado
	$("#my_iframe").on("load" , function(){
        $("#layer").hide('slow')
  })	
})