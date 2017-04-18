window.addEventListener("load", function(){

  var closed = document.getElementsByClassName("close");
  var reset = document.getElementById("reset");
  var origen = document.getElementById("origen");
  var extincion = document.getElementById("extincion");
  var contentOrigin = document.getElementById("contentOrigen");
  var contentExtincion = document.getElementById("contentExtincion");

  //funcion para ocultar imagenes
  for(i=0; i<closed.length; i++){

    closed[i].addEventListener("click", function(){
      this.parentNode.style.display = "none";
    });
  }
  //restablecer imagenes
  reset.addEventListener("click", function(){
    for(i=0; i<closed.length; i++){
      closed[i].parentNode.style.display = "inline-block";
    }
  });
  //visibility hidden origen y extincion
  origen.addEventListener("click", function(){
    contentOrigin.classList.toggle("ocultar");
  });
  extincion.addEventListener("click", function(){
    contentExtincion.classList.toggle("ocultar");
  });


});
