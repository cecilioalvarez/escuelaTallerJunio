describe ("Manejo de Arrays", function(){
it ("test suma de 10 números negativos", function() {

var suma=0;

for(var i=0;i>-10;i--){

      suma = suma+i;


  }

expect(suma).toBe(-45);

});
});
