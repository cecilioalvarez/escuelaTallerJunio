
describe(" Manejo de arrays", function () {

  it ("test contar array", function() {
    var lista=[1,3,6,7];
    expect(lista.length).toBe(4);
  });



  it ("test suma array", function() {
    var suma=0;
    var lista=[1,3,6,7];
    for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];
    }
    expect(suma).toBe(17);
  });



  it ("test menor del array", function() {

    var lista=[4,2,6,7];
    var menor=lista[0];
    for (var i=0;i<lista.length;i++){
      if (menor>lista[i]){
        menor=lista[i];
      }
    }
    expect(menor).toBe(2);
  });



  it ("test contar numero de doses", function() {

    var lista=[4,2,2,2,6,7];
    var contador=0;
    for (var i=0;i<lista.length;i++){
      if(lista[i]==2){
        contador++;
        }
    }
    expect(contador).toBe(3);
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



  it ("test media de un array", function() {

    var lista=[4,2,2,5,7];
    var suma=0;
    for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];
  }
    var media=suma/lista.length;
    expect(media).toBe(4);
  });



  it ("test push array", function() {

    var lista=[4,2,2,5,7];
    expect(lista.length).toBe(5);
    lista.push(4,9);
    expect(lista.length).toBe(7);
  });



  it ("test push array a otro array", function() {

    var lista1=[4,2,2,5,7];
    var lista2=[];
    for (var i=0;i<lista1.length;i++){
      lista2.push(lista1[i]);
    }
    expect(lista2).toEqual(lista1);
  });



  it ("test push array a otro array menores de 3", function() {

    var lista1=[4,2,2,5,7,5];
    var lista2=[];
    for (var i=0;i<lista1.length;i++){
      if (lista1[i]>=3){
        lista2.push(lista1[i]);
      }
    }
    expect(lista2.length).toBe(4);
  });



  it ("test recorrer array hacia atras", function() {

    var lista=[4,2,5,7,5];
    var texto="";
    for (var i=lista.length-1;i>=0;i--){
      texto=texto+lista[i];
    }
    expect(texto).toEqual("57524");
  });



  it ("test push a otro array al reves", function() {

    var lista1=[4,2,5,7,5];
    var lista2=[];
    for (var i=lista1.length-1;i>=0;i--){
      lista2.push(lista1[i]);
    }
    expect(lista2).toEqual([5,7,5,2,4]);
  });



  it ("test push a un nuevo array del cuadrado del primero", function() {

    var lista=[4,2,5,7,5];
    var lista2=[];
    for (var i=0;i<lista.length;i++){
      lista2.push(lista[i]*lista[i]);
    }
    expect(lista2).toEqual([16,4,25,49,25]);
  });



  it ("test push aprobado suspenso a otro array", function() {

    var lista=[4,2,9,7,5];
    var lista2=[];
    for (var i=0;i<lista.length;i++){
      if (lista[i]<=2){
        lista2.push("peor que la mierda");
      }else if (lista[i]<=4 && lista[i]>2){
        lista2.push("eres mierda");
      }else if (lista[i]<=5 && lista[i]>4){
        lista2.push("te salvas");
      }else if (lista[i]<=7 && lista[i]>5){
        lista2.push("no esta mal");
      }else {
        lista2.push("puto amo");
      }
    }
    expect(lista2).toEqual(["eres mierda","peor que la mierda","puto amo","no esta mal","te salvas"]);
  });


});
