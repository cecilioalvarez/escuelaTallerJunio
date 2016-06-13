describe("arrays",function(){

it ("test mayor del array",function(){
  var lista=[2,2,3,5,1];
  var mayor=0;
  for (var i=0;i<lista.length;i++){
    if (mayor<lista[i]){
      mayor=lista[i];
    }
  }
  expect(mayor).toBe(5);
});

it("test longitud array minimo",function() {
  var lista=[2,2,3,5,1];
  var menor=lista[0];
  for (var i=0; i<lista.length; i++){
  if (lista[i]<menor){
    menor=lista[i];
  }

  }
  expect(menor).toBe(1);

});
});
