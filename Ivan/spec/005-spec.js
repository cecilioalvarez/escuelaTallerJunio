describe("Conjunto test", function() {

  it("test for sencillo", function() {

var resultado=0;

for(var i=0;i<10;i++) {
resultado=resultado+i;

}
expect(resultado).toBe(45);
});
it("test for pares", function() {

var resultado=0;

for(var i=0;i<5;i++) {
resultado=resultado+(i*2);

}
expect(resultado).toBe(20);
});

});
