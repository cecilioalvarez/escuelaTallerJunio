var operaciones=require("./funcion1.js");
describe("function basica",function(){
  var numero1;
    var numero2;

    beforeEach(function(){
numero1=2;
numero2=2;

});
it("test function suma", function() {

   expect(operaciones.suma(2,2)).toBe(4);
});

it("test function resta", function() {

   expect(operaciones.resta(2,2)).toBe(0);
});
it("test function resta", function() {

   expect(operaciones.multiplicacion(2,2)).toBe(4);
});
it("test function resta", function() {

   expect(operaciones.division(2,2)).toBe(1);
   });
   });
