describe ("Suma de los diez prumeros números", function(){
    it ("test bucle for suma", function() {
      var resultado=0;

      for(var i=0;i<10;i++) {

     var resultado = resultado+i;
      }

    expect(resultado).toBe(45);;
});

it ("test bucle for suma 5 primeros pares", function() {
  var resultado=0;

  for(var i=0;i<5;i++) {

 var resultado = resultado+i*2;
  }

expect(resultado).toBe(20);;
})


});
