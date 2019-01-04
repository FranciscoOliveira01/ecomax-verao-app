$(document).ready( function(){
	var mostrou  = false;
//oculta preloader quando o iframe é carregado
$("#my_iframe").on("load" , function(){
        $("#layer").hide('slow')
        mostrou = true;
       
  })

if(mostrou){
	 $("#layer").css("display", "none")
}
})