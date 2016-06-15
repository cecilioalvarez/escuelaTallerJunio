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
it ("test añadir al array", function() {

  var lista=[1,2,3,4,5];
  expect(lista.length).toBe(5);
  lista.push(6);
  expect(lista.length).toBe(6);
});

it ("test añadir al array", function() {

  var lista1=[1,2,3,4,5];
  var lista2=[];
  for(var i=0; i<lista1.length; i++){
      lista2.push(lista1[i]);
  }
  console.log(lista2);
  expect(lista1.length).toBe(lista2.length);
  expect(lista1).toEqual(lista2);
});
it ("test mayor de 3 array", function() {

  var lista1=[1,2,3,4,5];
  var lista2=[];
  for(var i=0; i<lista1.length; i++){
  if (lista1[i]>=3){
  lista2.push(lista1[i]);
  }
}
  expect(lista2.length).toBe(3);
});
it ("test recorrer array al reves", function() {

  var lista1=[1,2,3,4,5];
  var texto="";
  for(var i=lista1.length; i>0; i--){
  texto=texto+i;
}
  expect(texto).toEqual("54321");
});
it ("test duplicar array al reves", function() {

  var lista1=[1,2,3,4,5];
  var lista2=[];
  for(var i=lista1.length-1; i>=0; i--){
  lista2.push(lista1[i]);
}
  expect(lista2).toEqual([5,4,3,2,1]);
});
it ("test nuevo array *2", function() {

  var lista1=[1,2,3,4,5];
  var lista2=[];
  for(var i=0; i<lista1.length; i++){
  lista2.push(lista1[i]*2);
}
  expect(lista2).toEqual([2,4,6,8,10]);
});
it ("test crear array suma dde arrays", function() {

  var lista1=[1,2,3,4,5];
  var lista2=[1,2,3,4,5];
  var lista3=[];
  for(var i=0; i<lista1.length; i++){
  lista3.push(lista1[i]+lista2[i]);
}
  expect(lista3).toEqual([2,4,6,8,10]);
});
});
