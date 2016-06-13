describe("test arrays",function(){

it ("test repeticion del array",function(){
  var lista=[2,2,3,5,1];
  var repeticion=0;
  for (var i=0;i<lista.length;i++){
    if (lista[i]==2){
      repeticion=repeticion+1
    }
  }
  expect(repeticion).toBe(2);
});

it ("test menor del array", function() {

  var lista=[4,2,2,2,6,7];
  var contador=0;
  for (var i=0;i<lista.length;i++){
    if(lista[i]==2){
      contador++;
      }
  }
  expect(contador).toBe(3);
});

});
