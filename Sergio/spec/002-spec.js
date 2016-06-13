describe ("Conjunto test", function(){
  it ("test variables suma", function(){
    var numero1=2;
    var numero2=2;
    var suma=numero1+numero2;
    expect(suma).toBe(4);
  });
    it ("test variables resta", function(){
      var numero1=2;
      var numero2=2;
      var suma=numero1-numero2;
      expect(suma).toBe(0);
    });
      it ("test variables multiplica", function(){
        var numero1=2;
        var numero2=2;
        var suma=numero1*numero2;
        expect(suma).toBe(4);
      });
        it ("test variables divide", function(){
          var numero1=2;
          var numero2=2;
          var suma=numero1/numero2;
          expect(suma).toBe(1);
        })
        });
