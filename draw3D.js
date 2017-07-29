function Scene() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 900;
    Fx = canvas.width / 2;
    Fy = canvas.height / 2;
    Fz = 200;
    setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        update();
    });
}
function Model(X, Y, Z) {
    this.x = X;
    this.y = Y;
    this.z = Z;
    this.Line3D = function(X1, Y1, Z1, X2, Y2, Z2) {
        ctx.beginPath();
        ctx.moveTo((X1 + this.x + (Math.pow(2, Z1 / Fz + this.z) - 1) * (X1 + this.x - Fx)), (Y1 + this.y + (Math.pow(2, Z1 / Fz + this.z) - 1) * (Y1 + this.y - Fy)));
        ctx.lineTo((X2 + this.x + (Math.pow(2, Z2 / Fz + this.z) - 1) * (X2 + this.x - Fx)), (Y2 + this.y + (Math.pow(2, Z2 / Fz + this.z) - 1) * (Y2 + this.y - Fy)));
        ctx.stroke();
    }
    this.Cube3D = function(X1, Y1, Z1, X2, Y2, Z2) {
        this.Line3D(X1, Y1, Z1, X2, Y1, Z1);
        this.Line3D(X1, Y1, Z1, X1, Y2, Z1);
        this.Line3D(X2, Y1, Z1, X2, Y2, Z1);
        this.Line3D(X1, Y2, Z1, X2, Y2, Z1);
        this.Line3D(X1, Y1, Z1, X1, Y1, Z2);
        this.Line3D(X1, Y2, Z1, X1, Y2, Z2);
        this.Line3D(X2, Y1, Z1, X2, Y1, Z2);
        this.Line3D(X2, Y2, Z1, X2, Y2, Z2);
        this.Line3D(X1, Y1, Z2, X2, Y1, Z2);
        this.Line3D(X1, Y1, Z2, X1, Y2, Z2);
        this.Line3D(X2, Y1, Z2, X2, Y2, Z2);
        this.Line3D(X1, Y2, Z2, X2, Y2, Z2);
    }
    this.Cilinder3D = function(X1, Y1, X2, Y2, H1, H2, RX1, RY1, RX2, RY2, K) {
        for (var i = 0; i < 2 * Math.PI; i += 2 / K * Math.PI) {
            this.Line3D(Math.cos(i) * RX1 + X1, Math.sin(i) * RY1 + Y1, H1, Math.cos(i) * RX2 + X2, Math.sin(i) * RY2 + Y2, H2);
            this.Line3D(Math.cos(i) * RX1 + X1, Math.sin(i) * RY1 + Y1, H1, Math.cos(i + 2 / K * Math.PI) * RX1 + X1, Math.sin(i + 2 / K * Math.PI) * RY1 + Y1, H1);
            this.Line3D(Math.cos(i) * RX2 + X2, Math.sin(i) * RY2 + Y2, H2, Math.cos(i + 2 / K * Math.PI) * RX2 + X2, Math.sin(i + 2 / K * Math.PI) * RY2 + Y2, H2);
        }
    }
    this.Ball3D = function(X1, Y1, Z1, RX, RY, RZ, J, K) {
        for (var i = 0; i < RZ; i += RZ / (J)) {
            //this.Cilinder3D(X1+(RX-X1)/2,Y1+(RY-Y1)/2,X1+(RX-X1)/2,Y1+(RY-Y1)/2,-i/5+RZ/2,-(i+2/J*RZ*Math.PI)/5+RZ/2,(Math.sqrt(1-i*i/1000))*(RX-X1)/2,(Math.sqrt(1-i*i/1000))*(RY-Y1)/2,(Math.sqrt(1-((i+2/J*RZ*Math.PI)*(i+2/J*RZ*Math.PI))/1000))*(RX-X1)/2,(Math.sqrt(1-((i+2/J*RZ*Math.PI)*(i+2/J*RZ*Math.PI))/1000))*(RY-Y1)/2,K)
            this.Cilinder3D(X1 + (RX - X1) / 2, Y1 + (RY - Y1) / 2, X1 + (RX - X1) / 2, Y1 + (RY - Y1) / 2, Z1 + i, RZ + i + Z1 / (J), RX, RY, RX, RY, K)
        }
    }
}