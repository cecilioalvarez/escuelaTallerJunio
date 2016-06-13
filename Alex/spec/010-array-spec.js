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
});
