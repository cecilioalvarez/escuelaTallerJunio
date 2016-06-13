describe ("suma de un bucle while", function(){
  it ("test bucle for suma 10 items", function() {
var i=0;
var suma=0;
while(i<10){
  suma=suma+i;
  i++;
}
expect(suma).toBe(45);
});

  it ("test bucle suma pares", function() {
    var suma=0;
    for(var i=0;i<=5;i++){
      suma=suma+(i*2);
    }
    expect(suma).toBe(30);


});
});
