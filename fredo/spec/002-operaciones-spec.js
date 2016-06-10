describe ("Conjunto test", function(){
  it ("test variables suma", function(){
    var numero1=3;
    var numero2=2;
    var suma=numero1+numero2;
    expect(suma).toBe(5);
  });
    it ("test variables resta", function(){
      var numero1=3;
      var numero2=2;
      var suma=numero1-numero2;
      expect(suma).toBe(1);
    });
      it ("test variables multiplica", function(){
        var numero1=3;
        var numero2=2;
        var suma=numero1*numero2;
        expect(suma).toBe(6);
      });
        it ("test variables divide", function(){
          var numero1=3;
          var numero2=2;
          var suma=numero1/numero2;
          expect(suma).toBe(1.5);
        })
        });
