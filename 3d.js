var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Fx=320;
var Fy=240;
var i=0;

setInterval(function () {
Fx=200+200*Math.cos(i/80);
Fy=200+200*Math.sin(i/80);
ctx.clearRect(0,0,canvas.width,canvas.height);
Cube3D(400,400,0,500,500,200);
i++;
});
function Line3D(X1,Y1,Z1,X2,Y2,Z2){
  ctx.beginPath();
  ctx.moveTo(X1+(Z1/300)*(X1-Fx),Y1+(Z1/300)*(Y1-Fy));
  ctx.lineTo(X2+(Z2/300)*(X2-Fx),Y2+(Z2/300)*(Y2-Fy));
  ctx.stroke();
}
function Cube3D(X1,Y1,Z1,X2,Y2,Z2){
Line3D(X1,Y1,Z1,X2,Y1,Z1);
Line3D(X1,Y1,Z1,X1,Y2,Z1);
Line3D(X2,Y1,Z1,X2,Y2,Z1);
Line3D(X1,Y2,Z1,X2,Y2,Z1);

Line3D(X1,Y1,Z1,X1,Y1,Z2);
Line3D(X1,Y2,Z1,X1,Y2,Z2);
Line3D(X2,Y1,Z1,X2,Y1,Z2);
Line3D(X2,Y2,Z1,X2,Y2,Z2);

Line3D(X1,Y1,Z2,X2,Y1,Z2);
Line3D(X1,Y1,Z2,X1,Y2,Z2);
Line3D(X2,Y1,Z2,X2,Y2,Z2);
Line3D(X1,Y2,Z2,X2,Y2,Z2);
ctx.stroke();
}
function Cilinder3D(X1,Y1,X2,Y2,R1,R2,H1,H2){
for (var i = 0; i < 6.2831; i+=0.1) {
  Line3D(Math.cos(i)*R1+X1,Math.sin(i)*R1+Y1,H1,Math.cos(i)*R2+X2,Math.sin(i)*R2+Y2,H2);
  Line3D(Math.cos(i)*R1+X1,Math.sin(i)*R1+Y1,H1,Math.cos(i+0.1)*R1+X1,Math.sin(i+0.1)*R1+Y2,H1);
  Line3D(Math.cos(i)*R2+X2,Math.sin(i)*R2+Y1,H2,Math.cos(i+0.1)*R2+X2,Math.sin(i+0.1)*R2+Y2,H2);
  }
ctx.stroke();
}
