var grupo1="";
for (var i=1; i<=5; i++) {
  grupo1=grupo1+i;
}
expect(grupo1).toBe("12345");

var grupo2="";
for (var i=5; i>0; i--) {
  grupo2=grupo2+i;
}
var grupo3=grupo2+grupo1;
expect(grupo3).toBe("5432112345");
