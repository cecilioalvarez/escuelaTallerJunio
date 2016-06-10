describe("Conjunto test",function(){

it("test variables suma",function(){
  var numero1=1;
  var numero2=2;
  var resultado=numero1+numero2;
  expect(resultado).toBe(3);

});
it("test variables resta",function(){
  var numero1=2;
  var numero2=1;
  var resultado=numero1-numero2;
  expect(resultado).toBe(1);
});
it("test variables multiplicacion",function(){
  var numero1=1;
  var numero2=2;
  var resultado=numero1*numero2;
  expect(resultado).toBe(2);
});
it("test variables division",function(){
  var numero1=4;
  var numero2=2;
  var resultado=numero1/numero2;
  expect(resultado).toBe(2);
});


});
