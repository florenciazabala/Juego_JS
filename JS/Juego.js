
var eleccionUsuario;

/* eleccionUsuario.elegir.opcion; */ 
var eleccionMaquina= aleatorio(1,3);

var opciones=["piedra","papel","tijera"];

var jugadaUsuario= opciones[eleccionUsuario-=1];
var usuario=document.querySelector('#usuario');
usuario.innerHTML=("Tu jugada: "+jugadaUsuario);

var jugadaMaquina= opciones[eleccionMaquina-=1];
var maquina=document.querySelector('#maquina');
maquina.innerHTML=("Jugada de la maquina: "+jugadaMaquina);

var resultado= jugadaUsuario+jugadaMaquina;
var total=document.querySelector('#total');
total.innerHTML=("RESULTADO : "+resultado);


/* function Jugar(){
   var num= window.prompt("Coloque el numero de su jugada");
   return num;
}
 */
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

function CambiarImagen(valor){
    var imagen = document.getElementById('jugada');
    if(valor==1){
        imagen.src="../IMAGENES/piedra.png" ;
    } else if(valor==2){
        imagen.src="../IMAGENES/papel.png" ;
    } else if(valor==3){
        imagen.src="../IMAGENES/tijera.png" ;
    }
    
    
}