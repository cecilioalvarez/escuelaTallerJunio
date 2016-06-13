describe ("Bucles", function(){
it ("test bucle for suma", function() {
      var resultado=0;

      for(var i=0;i<10;i++) {

     resultado = resultado+i;
      }

    expect(resultado).toBe(45);
});

it ("test bucle for suma 5 primeros pares", function() {
    var resultado=0;

    for(var i=0;i<5;i++) {

      resultado = resultado+i*2;
  }

    expect(resultado).toBe(20);

});

it ("test bucle for suma 10 primeros while", function() {
    var i=0;
    var suma=0;

    while (i<10) {

  suma=suma+i;
  i++;

  }

    expect(suma).toBe(45);

});

it ("test bucle for suma 10 primeros do while", function() {
  var i=0;
  var suma=0;
		do {

      suma=suma+i;
	     i++;
		}while (i<10)

    expect(suma).toBe(45);
})
});
