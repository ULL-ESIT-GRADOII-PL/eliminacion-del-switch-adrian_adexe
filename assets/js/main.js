(function(exports) {
  "use strict";
  function main() {
     var valor     = document.getElementById('convert').value,
         elemento  = document.getElementById('converted'),
         respuesta;

     respuesta = Medida.convertir(valor);
     elemento.className = "salidaValido";

     if(respuesta == "Fallo"){
       elemento.className = "salidaError";
       elemento.innerHTML = "Error, cadena incorrecta. Ejemplo válido: -3.5e2c to f";
     }
     else {
       elemento.innerHTML = Medida.convertir(valor);
     }
     return false;
   }
   exports.main = main;
})(this);
