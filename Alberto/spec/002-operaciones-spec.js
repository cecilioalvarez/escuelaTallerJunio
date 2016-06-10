
describe ("Conjunto test opraciones", function() {
  it ("test variables suma", function() {
    var valor1=24;
    var valor2=22;
    var valor3=20;
    var total=valor1+valor2+valor3;
    expect(total).toBe(66);
  });

  it ("test variables resta", function() {
    var valor1=24;
    var valor2=22;
    var valor3=20;
    var total=valor1-valor2-valor3;
    expect(total).toBe(-18);
  });

  it ("test variables mutiplicacion", function() {
    var valor1=24;
    var valor2=22;
    var valor3=20;
    var total=valor1*valor2*valor3;
    expect(total).toBe(10560);
  });

  it ("test variables division", function() {
    var valor1=40;
    var valor2=2;
    var valor3=2;
    var total=valor1/valor2/valor3;
    expect(total).toBe(10);
  })
});
