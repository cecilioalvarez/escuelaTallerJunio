describe("Conjunto test", function(){

  it("test variables suma", function(){

    var numero1=2;
    var numero2=2;
    var resultado=numero1+numero2;
    expect(resultado).toBe(4);
  });
  it("test variables resta", function(){

    var numero1=2;
    var numero2=2;
    var resultado=numero1-numero2;
    expect(resultado).toBe(0);
  });
  it("test variables multiplicacion", function(){

    var numero1=2;
    var numero2=2;
    var resultado=numero1*numero2;
    expect(resultado).toBe(4);
  });
  it("test variables suma", function(){

    var numero1=4;
    var numero2=2;
    var resultado=numero1/numero2;
    expect(resultado).toBe(2);
  });
});
