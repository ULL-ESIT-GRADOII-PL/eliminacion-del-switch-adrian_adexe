(function(exports){
    "use strict";

  function Temperatura(valor,tipo){
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
  }

  Temperatura.prototype = Object.create(Medida.prototype);
  Temperatura.prototype.constructor = Temperatura;


  /////////////////////////////////////////////////////////////////FUNCIÓN CELSIUS
    function Celsius(valor){
      Temperatura.call(this, valor, 'c')
    }

    Celsius.prototype = Object.create(Temperatura.prototype);


    Celsius.prototype.toFarenheit = function () { //CELSIUS TO FARENHEIT
       return new Farenheit(this.valor*1.8 + 32);
    }
    Celsius.prototype.toKelvin = function () { //CELSIUS TO KELVIN
       return new Kelvin(this.valor + 273.15)
   }

   Celsius.prototype.toString = function () {
      return this.valor.toFixed(2) + " Celsius";
  }

    Celsius.prototype.constructor = Celsius;

  ///////////////////////////////////////////////////////////////FUNCIÓN FARENHEIT
    function Farenheit(valor){
      Temperatura.call(this, valor, 'f')
    }

    Farenheit.prototype = Object.create(Temperatura.prototype);

    //FARENHEIT TO CELSIUS
     Farenheit.prototype.toCelsius = function () {
        return new Celsius((this.valor -32)/1.8)
  //      return ((this.valor -32)/1.8)
     }
    //FARENHEIT TO KELVIN
     Farenheit.prototype.toKelvin = function () {
        return new Kelvin((this.valor + 459.67)*5/9)
  //      return ((this.valor + 459.67)*5/9)
     }
     Farenheit.prototype.toString = function () {
        return this.valor.toFixed(2) + " Farenheit";
    }

    Farenheit.prototype.constructor = Farenheit;

  //////////////////////////////////////////////////////////////////FUNCIÓN KELVIN
    function Kelvin(valor) {
       Temperatura.call(this, valor, 'k');
    }

   Kelvin.prototype = Object.create(Temperatura.prototype);


    Kelvin.prototype.toCelsius = function () { //KELVIN TO CELSIUS
       return new Celsius(this.valor - 273.15);
  //     return (this.valor - 273.15);
    }
    Kelvin.prototype.toFarenheit = function () {  //KELVIN TO FARENHEIT
       return new Farenheit(this.valor*(9/5) - 459.67);
  //     return (this.valor*(9/5) - 459.67)
    }

   Kelvin.prototype.toString = function () {
      return this.valor.toFixed(2) + " Kelvin";
  }

   Kelvin.prototype.constructor = Kelvin;

  ///////////////////////////////////////////////////////////////////FIN FUNCIONES

    exports.Temperatura = Temperatura;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;
    exports.Kelvin = Kelvin;
})(this);
