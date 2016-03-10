(function(exports){
  "use strict";
  function Medida(valor,tipo){
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    if(!tipo){
      tipo = ""
      var unit = valor + tipo;
      console.log("valor de unit: "+ unit)
      var regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i;
      unit = unit.match(regexp);
      this.valor = unit[1];
      this.tipo = unit[2];
    }
    /* ademas de new Medida(45.2, "Km") */
    else{
      this.valor = valor
      this.tipo = tipo
    }
  }

  Medida.convertir = function(valor){

      var regexp    = XRegExp('^\\s*(?<numero> [+-]?\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?)\\s*  # numero  \n' +
                        '(?<tactual> [ckf])\\s+  # TempActual \n' +
                        '(?<to> to\\s+)?' +
                        '(?<tdestino> [ckf])\\s*$ # TempDestino \n', 'xi'),
      valor     = valor.match(regexp);

      if (valor) {
      var numero = valor[1],
         from   = valor[2].toLowerCase(),
         to     = valor[4].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Temperatura actual: " + from + ", Temperatura a convertir: " + to);

      var aux = from+to

      //elemento.className = "salidaValido";

      switch (aux) {
        case 'cf':
           var celsius = new Celsius(numero);
           elemento.innerHTML = celsius.toFarenheit().toString();
           break;
        case 'ck':
           var celsius = new Celsius(numero);
           elemento.innerHTML = celsius.toKelvin().toString();
           break;
        case 'fc':
           var farenheit = new Farenheit(numero);
           elemento.innerHTML = farenheit.toCelsius().toString();
           break;
        case 'fk':
           var farenheit = new Farenheit(numero);
           elemento.innerHTML = farenheit.toKelvin().toString();
           break;
        case 'kc':
           var kelvin = new Kelvin(numero);
           elemento.innerHTML = kelvin.toCelsius().toString();
           break;
        case 'kf':
           var kelvin = new Kelvin(numero);
           elemento.innerHTML = kelvin.toFarenheit().toString();
      //             elemento.innerHTML = kelvin.toFarenheit().toFixed(2) + " Farenheit";
           break;
        default:
         /* rellene este código */
         elemento.className = "salidaError";
         elemento.innerHTML = " Conversión imposible";
      }
      }
      else {
        elemento.className = "salidaError";
        elemento.innerHTML = "Error, cadena incorrecta. Ejemplo válido: -3.5e2c to f";
      }
  }
  exports.Medida = Medida
})(this);
