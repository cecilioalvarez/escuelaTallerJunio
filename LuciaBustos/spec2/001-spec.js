var operaciones=require("./funcion1.js");
describe("function basica",function(){

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
