var misfunciones=require("./funciones4.js");
describe("numero positivo o negativo",function(){
var numero;

beforeEach(function(){
numero=-5;
});
it ("test positivo o negativo ",function(){
  expect (misfunciones.numeropositivo(numero)).toBe("negativo");

});

});
