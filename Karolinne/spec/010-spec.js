describe("manejo de arrays ", function() {

  it("test array mayores que tres en otra array", function() {
    var lista=[1,2,3,4,5,1];
    var lista2=[];
    for (i=0; i<lista.length; i++) {
    if(lista[i]>3){
        lista2.push(i);
      }
    }
expect(lista2.length).toBe(2);
  });

  it("test recorrer una array al rever", function() {

    var lista=[1,2,3,4,5];
    var texto="";
    for (i=lista.length;i>0;i--) {
texto=texto+i;

}
expect(texto).toEqual("54321");
  });
  it("test recorrer una array al rever y merterlo en otra array", function() {

    var lista=[1,2,3,4,5];
    var lista2=[];

    for (i=lista.length-1;i>=0;i--) {

      lista2.push(lista[i]);

      }

console.log (lista2);
      expect(lista2.length).toBe(5);


  });
  });
