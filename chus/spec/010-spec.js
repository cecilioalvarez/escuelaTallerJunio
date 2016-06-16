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
            expect(lista2).toEqual([2,4,6,8,10]);

            });
            it("test array notas y texto", function() {
            var lista = [2, 4, 6, 8, 10];
            var lista2 = [];
            for (var i = 0; i < lista.length; i++) {

            if (lista[i] <= 2) {

               lista2.push("muy mal");
            } else if (lista[i] >= 2 && lista[i] <= 4) {
               lista2.push("mal");
            } else if (lista[i] >= 5 && lista[i] <= 6) {
               lista2.push("bien");
            } else if (lista[i] >= 7 && lista[i] <= 8) {
               lista2.push("notable");
            } else {
               lista2.push("sobresaliente");
            }
            }
            expect(lista2).toEqual(["muy mal", "mal", "bien", "notable", "sobresaliente"]);
            });
            });
