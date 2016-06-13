describe("Suma bucle while",function(){

it("suma while",function(){
var resultado=0;
var i=0;
while (i<10){
resultado=resultado+i;
  i++;
}
  expect(resultado).toBe(45);
});

});
