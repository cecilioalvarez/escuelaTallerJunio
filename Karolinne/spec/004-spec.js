describe ("suma de un bucle", function(){
  it ("test bucle for suma", function() {
    var resultado=0;
    for (var i=0;i<10;i++){
      resultado=resultado+i;
}
expect(resultado).toBe(45)
});

it ("test bucle for suma 5 primeros pares", function() {
  var suma=0;
  for(var i=0;i<5;i++){
    suma=suma+(i*2);
  }
  expect(suma).toBe(20);
});
});
