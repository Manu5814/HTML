// variables cronometro
var h; //horas
var m; //minutos
var s; //segundos
var mil; //milesimas
var apt; //activa setTimeOut
// iniciar crono
function cronometro(){
    tick();
}
    function tick(){
        h=document.getElementById('hora').value;
        m=document.getElementById('minutos').value;
        s=document.getElementById('segundos').value;
        mil=document.getElementById('milesimas').value;
        //
        h=parseInt(h);
        m=parseInt(m);
        s=parseInt(s);
        mil=parseInt(mil);
        //Definicion incrementos crono
        if(mil<99){
            mil++; //incrementar en 1
        }else if(s<59){
            mil=0;
            s++;
        }else if(m<59){
            mil=0;
            s=0;
            m++;
        }else if(h<23){
            mil=0;
            s=0;
            m=0;
            h++;
        }else{
            mil=0;
            s=0;
            m=0;
            h=0;
        }
        //SALIDA AL FORMULARIO CRONO
        document.getElementById('hora').value=h;
        document.getElementById('minutos').value=m;
        document.getElementById('segundos').value=s;
        document.getElementById('milesimas').value=mil;
        apt=setTimeout(tick,1);  //activa crono cada 1 milesima.
    }
    function parar (){
        clearTimeout(apt);
    }
    function reiniciar(){
        mil=0;
        s=0;
        m=0;
        h=0;
        document.getElementById('hora').value=h;
        document.getElementById('minutos').value=m;
        document.getElementById('segundos').value=s;
        document.getElementById('milesimas').value=mil;
    }