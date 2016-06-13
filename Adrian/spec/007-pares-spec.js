describe("Suma bucle for",function(){

it("suma bucle",function(){
var resultado=0
for(i=0;i<=10;i++){

  resultado=resultado+i
}
  expect(resultado).toBe(55);
});
it("test suma 5 primeros pares", function(){
var resultado=0;
for(var i=0;i<10;i=i+2){

  resultado=resultado+i;
}
  expect(resultado).toBe(20);
});
});
