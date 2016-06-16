describe (" Conjunto test Operaciones", function() {

  it("test variables suma", function() {
var num1=2;
var num2=2;
var resultado=num1+num2;
expect(resultado).toBe(4);
  });

  it("test variables resta", function() {
  var num1=2;
  var num2=2;
  var resultado=num1-num2;
  expect(resultado).toBe(0);
});

it("test variables multiplicacion", function() {
var num1=2;
var num2=2;
var resultado=num1*num2;
expect(resultado).toBe(4);
});

it("test variables division", function() {
var num1=2;
var num2=2;
var resultado=num1/num2;
expect(resultado).toBe(1);

});
});
