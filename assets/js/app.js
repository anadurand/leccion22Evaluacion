window.addEventListener("load", function(){

  var closed = document.getElementsByClassName("close");
  var reset = document.getElementById("reset");
  var origen = document.getElementById("origen");
  var extincion = document.getElementById("extincion");
  var contentOrigin = document.getElementById("contentOrigen");
  var contentExtincion = document.getElementById("contentExtincion");


  for(i=0; i<closed.length; i++){

    closed[i].addEventListener("click", function(e){
      e.target.parentNode.style.display = "none";
    });
  }
  reset.addEventListener("click", function(){
    for(i=0; i<closed.length; i++){
      closed[i].parentNode.style.display = "inline-block";
    }
  });

  origen.addEventListener("click", function(){
    contentOrigin.classList.toggle("ocultar");
  });
  extincion.addEventListener("click", function(){
    contentExtincion.classList.toggle("ocultar");
  });


});
