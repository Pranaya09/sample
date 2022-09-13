class Myclass{
    constructor() {}

add() 
{
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("last").value);
    var c = a + b;
    document.getElementById("res").value = c;
}
}
var  my=new Myclass();