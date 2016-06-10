describe("suma 10 primeros numeros", function() {
  it("suma bucle for", function(){

    var resultado=0;
    for (i=0;i<10;i++){
      resultado=resultado+i;
    }
    expect(resultado).toBe(45);

  });

});
