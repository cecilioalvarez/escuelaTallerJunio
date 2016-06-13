describe("suma 10 primeros numeros", function() {
  it("suma bucle for", function(){

    var resultado=0;
    for (i=0;i<10;i++){
      resultado=resultado+i;
    }
    expect(resultado).toBe(45);

  });

  it("test suma 5 primeros numeros", function() {
    var resultado=0;
    for(var i=0;i<5;i++) {
      resultado=resultado+(i*2);
    }
  expect(resultado).toBe(20);
});

});
