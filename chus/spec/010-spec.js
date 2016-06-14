describe("Rellenar Array del reves", function() {

            it("test array duplicar", function() {
                var lista = [1, 2, 3, 4, 5, 1, 1];
                var lista2 = [];
                for (var i = lista.length-1; i > 0; i--) {

                    lista2.push(lista[i]);

                }

                console.log(lista2);

            });


            it("test nuevo array *2", function() {

            var lista=[1,2,3,4,5];
            var lista2=[];
            for (var i=0;i<lista.length;i++) {

            lista2.push(lista[i]*2);
            }
            console.log(lista2);
            expect(lista).toEqual([2,4,6,8,10]);

            });
            });
