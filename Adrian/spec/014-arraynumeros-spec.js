describe("testarrays",function(){

it ("test repe del array",function(){
  var lista=[2,2,3,5,1];
  var repe=0;
  for (var i=0;i<lista.length;i++){
    if (lista[i]==2){
      repe=repe+1
    }
  }
  expect(repe).toBe(2);
});
});
