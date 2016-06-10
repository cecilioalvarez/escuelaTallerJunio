describe("Conjunto test Operaciones", function() {

  it("test variable suma", function() {

    var numero1=2;
    var numero2=2;
    var resultado=numero1+numero2;
    expect(resultado).toBe(4);

  });

it ("test variable resta", function(){
  var numero1=2;
  var numero2=2;
  var resultado=numero1-numero2;
  expect(resultado).toBe(0);
});

it("test variable multiplicacion", function(){
  var numero1=2;
  var numero2=2;
  var resultado=numero1*numero2;
  expect(resultado).toBe(4);
});

it("test variable division", function(){
  var numero1=2;
  var numero2=2;
  var resultado=numero1/numero2;
  expect(resultado).toBe(1);
});

});
