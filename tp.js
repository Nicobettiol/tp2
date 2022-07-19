
var capital=prompt("Introduzca el capital solicitado");
var interes=prompt("Indique el interes anual o tasa");
var anos=prompt("Introduzca el numero de años");

var n=anos*12;
var i=interes/1200;

var factor = Math.pow(i+1,n);
var cuota= capital*i*factor/(factor-1);

alert (`La cuota de ${capital} a ${n} meses y interés mensual de ${i * 100}% es ${cuota}`);