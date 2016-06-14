describe("testarrays",function(){

it ("test repe del array",function(){
  var lista=[2,2,3,5,1];
  var repe=0;
  for (var i=0;i<lista.length;i++){
    if (lista[i]==2){
      repe=repe+1;
    }
  }
  expect(repe).toBe(2);
});
it ("test sumar numeros mayores de 5", function() {

  var lista=[4,2,2,6,7];
  var numero=5;
  var suma=0;
  for (var i=0;i<lista.length;i++){
    if (lista[i]>numero){
      suma=suma+lista[i];
    }
}
  expect(suma).toBe(13);
});
it ("test suma 10 numeros negativos", function() {
  var suma=0;
  for (var i=0;i>-10;i--){
    suma=suma+i;
  }
  expect(suma).toBe(-45);
});

it ("test media de un array", function() {
  var lista=[1,2,3,4,5];
  var suma=0;
  for(var i=0; i<lista.length; i++){
    suma=suma+lista[i];
  }
  var media=suma/lista.length;
  expect(media).toBe(3);

});
});
