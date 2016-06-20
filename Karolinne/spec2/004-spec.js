var misfunciones=require("./funciones3.js");
describe("funciones mayor",function(){
var lista1;
var lista2;
beforeEach(function(){
lista1=[1,2,3];
lista2=[2,2,3];
});
it ("test suma ",function(){
  expect (misfunciones.mayorarray(lista2,lista1)).toBe(7);

});

});
