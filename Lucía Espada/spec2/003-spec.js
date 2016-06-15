var misfunciones=require("./funciones2.js");//importa el fichero
//creo el test
describe ("funciones bucles y numeros", function(){

var numero1;

beforeEach(function() {
//valores fijos
 numero1 = 4;

});

it ("test suma n primeros numeros", function() {

expect(misfunciones.sumaNumeros(numero1)).toBe(6);

});
});
