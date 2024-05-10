function apostar(){
let b=101;
let intentos=0;
var a=Math.round(Math.random()*100);
//ciclo while
while(a!=b){
    b=parseInt(prompt("INGRESE NUMERO AL AZAR [0 a 100]"));
    //
    if(b>a){
        alert("EL NUMERO ES MAS BAJO");
    }else{
        alert("EL NUMERO ES MAS ALTO");
    }
    intentos++; // contador de intentos consumidos
}
// al asertar random
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
document.getElementById("salida").value=" has consumido.. "+intentos+".. intentos";
swal("FELICITACIONES USUARIO","HAS ASERTADO NUMERO AL AZAR EXITOSAMENTE","succes");
} 
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("resultado").value=" ";
}