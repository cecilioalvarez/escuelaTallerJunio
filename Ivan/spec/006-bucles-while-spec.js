describe("Manejo de bucle while", function() {

  it("test bucle for suma 10 items", function() {
var i=0;
    var resultado=0;
    while (i < 10) {


    resultado=resultado+1;
    i++;
}
expect(resultado).toBe(10);

});

it("test bucle for suma 10 items", function() {
var i=0;
  var resultado=0;
  do {

resultado=resultado+i;
i++;
  }
  while (i < 10) {


expect(resultado).toBe(45);
}


});


});
