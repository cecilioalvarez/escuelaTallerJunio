describe("manejo de Objetos", function() {



  it("igualdad entre dos objetos", function() {
    var objeto1={nombre:"pepe"};
    var objeto2={nombre:"pepe"};
    expect(objeto1).toEqual(objeto2);
  })
  it("test contiene propiedad nombre", function() {
    var objeto1={nombre:"pepe"};

    expect(objeto.nombre).toBeDefined();
  })
  })
it ("test longitud array", function () {
  var lista= [1,2,3];
  expect(lista.length)toBe(3);
});
it("test suma items del array", function() {
  var lista= [1,2,3];
  var suma=0;
  for(var i=0; i<lista.length; i++) {
    suma= suma + lista[i];

  }
  expect(suma).toBe(3);
});


it("test menor del array", function() {
  var lista= [2,2,3,5,1];
  var suma=lista [0];
  for(var i=0; i<lista.length; i++) {
    if=lista[i];
}
  }
  expect(menor).toBe(1);


  });

  });


  it("test menor del array", function() {
    var lista= [2,2,3,5,1];
    var suma=lista [0];
    for(var i=0; i<lista.length; i++) {
      if=lista[i];
  }
    }
    expect(menor).toBe(1);


    });

    });

    it("numero de voces de 2", function() {
      var lista= [2,2,3,4,5];
      var elemento=2;
      var contador=0;
      for(var i=0; i<lista.length; i++) {
        if(elemento==lista[i]) {
          contador++;
        }
    }

      expect(contador).toBe(2);


      });

      });

          it("suma mayor5", function() {
            var lista= [2,6,7,4,6];
            var elemento=5;
            var contador=0;
            for(var i=0; i<lista.length; i++) {
              if(elemento[i]>5) {
                suma=suma+i;
              }
          }

            expect(suma).toBe(11);


            });

            it("suma mayor5", function() {
              var lista= [2,6,7,4,6];
              var elemento=5;
              var contador=0;
              for(var i=0; i<lista.length; i++) {
                if(elemento[i]>5) {
                  suma=suma+i;
                }
            }

              expect(suma).toBe(11);


              });


              it("test suma 10 numeros negativos", function() {

                var suma=0;

                for(var i=0; i> -10; i--) {
                  if(elemento[i]>5) {
                    suma=suma+i;
                  }
              }

                expect(suma).toBe(-45);


                });

                it("test media de un array", function() {
  var lista=[1,2,3,4,5];
                  var suma=0;

                  for(var i=0; i<lista.length; i++) {

                      suma=suma+lista[i];
                    }
  var media=suma/lista.length;
                  expect(media).toBe(3);


                  });

                  it("test añadir al array", function() {
    var lista=[1,2,3,4,5];

                            expect(lista.length).toBe(5);
                   lista.push(6);
                      expect(lista.length).toBe(6);


                    });
  });
