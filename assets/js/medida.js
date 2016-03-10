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

  Medida.matchRegExp =function(valor){
    var regexp    = XRegExp('^\\s*(?<numero> [+-]?\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?)\\s*  # numero  \n' +
                      '(?<tactual> [ckf])\\s+  # TempActual \n' +
                      '(?<to> to\\s+)?' +
                      '(?<tdestino> [ckf])\\s*$ # TempDestino \n', 'xi'),
    valor = XRegExp.exec(valor,regexp);
    return valor;
  }

  Medida.measures = {};

  Medida.convertir = function(valor){

      valor = Medida.matchRegExp(valor);

      if (valor) {
        var numero = valor[1],
            from   = valor[2].toLowerCase(),
            to     = valor[4].toLowerCase();

        numero = parseFloat(numero);

        var measures = Medida.measures;
           measures.c = Celsius;
           measures.f = Farenheit;
           measures.k = Kelvin;
        try{
           var source = new measures[from](numero);
           var target = "to"+measures[to].name;
           return source[target]();
        }catch(err) {
           return "Imposible";
        }

      }
      else {
        return "Fallo";
      }
  }
  exports.Medida = Medida
})(this);
