describe("Suma bucle dowhile",function(){

it("suma dowhile",function(){
var i=0;
var suma=0;
do{
suma=suma+i;
i++;
  }while(i<10)
  expect(suma).toBe(45);
});

});
