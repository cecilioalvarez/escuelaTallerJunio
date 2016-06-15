
describe("Suma arrays push", function() {
      it("Suma arrays push", function() {
        var lista=[1,2,3,4,5,6,7,8,9,10];
  			var lista2=[1,3,5,7,9,11,13,15,17,19];
        var suma=[];


  			for (var i=0; i<lista.length; i++) {
  				suma.push(lista[i]+lista2[i]);
  			}
        expect(suma).toEqual([ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29 ]);
      });
  });
