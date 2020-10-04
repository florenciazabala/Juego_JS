
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

function CambiarImagenResultadoU(valorUsuario){
    var imagenU=document.getElementById('incognitoUsuario');
    if(valorUsuario==1){
        imagenU.src="../IMAGENES/piedra.png" ;
    }else if(valorUsuario==2){
        imagenU.src="../IMAGENES/papel.png" ;
    }else if(valorUsuario==3){
        imagenU.src="../IMAGENES/tijera.png" ;
    }
}
function CambiarImagenResultadoM(valorMaquina){
    var imagenM=document.getElementById('incognitoMaquina');
    if(valorMaquina==1){
        imagenM.src="../IMAGENES/piedra.png" ;
    }else if(valorMaquina==2){
        imagenM.src="../IMAGENES/papel.png" ;
    }else if(valorMaquina==3){
        imagenM.src="../IMAGENES/tijera.png" ;
    }
}

function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
function confirmaJuego(){
    var confirmar=window.confirm("Desea iniciar el juego?");
	if(confirmar){
        var eleccionUsuario=parseInt(window.prompt("Escriba el numero de su jugada: \nPiedra: 1  \nPapel: 2 \nTijera: 3"));
        var opciones=["piedra","papel","tijera"];
        var jugadaUsuario= opciones[eleccionUsuario-=1];
        var eleccionMaquina= aleatorio(1,3);
        var jugadaMaquina= opciones[eleccionMaquina-=1];
        var resultado= jugadaUsuario+jugadaMaquina;
        var usuario=document.querySelector('#usuario');
        usuario.innerHTML=("Tu jugada: "+jugadaUsuario);
        var maquina=document.querySelector('#maquina');
        maquina.innerHTML=("Jugada de la maquina: "+jugadaMaquina);
        var total=document.querySelector('#total');
        
        switch (resultado) {
            case "piedrapiedra":
                var final="EMPATE, Tal vez la proxima tengas mas suete!"
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(1);
                CambiarImagenResultadoM(1);
                break;
            case "piedrapapel":
                
               
                var final="Lo siento, PERDISTE!! Vuelve a intentarlo";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(1);
                CambiarImagenResultadoM(2);
                break;
                
            case "piedratijera":
                
                var final="Felicitaciones, GANASTE!!";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(1);
                CambiarImagenResultadoM(3);
                break;
            
            case "papelpiedra":
                var final="Felicitaciones, GANASTE!!";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(2);
                CambiarImagenResultadoM(1);
                break;

            case "papelpapel":
        
                var final="EMPATE, Tal vez la proxima tengas mas suete!";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(2);
                CambiarImagenResultadoM(2);
                break;

            case "papeltijera":

                var final="Lo siento, PERDISTE!! Vuelve a intentarlo";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(2);
                CambiarImagenResultadoM(3);
                break;

            case "tijerapiedra":

                var final="Lo siento, PERDISTE!! Vuelve a intentarlo";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(3);
                CambiarImagenResultadoM(1);
                break;

            case "tijerapapel":
            
                var final="Felicitaciones, GANASTE!!";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(3);
                CambiarImagenResultadoM(2);
                break;

            case "tijeratijera":
                
                var final="EMPATE, Tal vez la proxima tengas mas suete!";
                total.innerHTML=("RESULTADO : "+final);
                CambiarImagenResultadoU(3);
                CambiarImagenResultadoM(3);
                break;
                
            default:
                var final="La opcion ingresada es incorrecta";
                total.innerHTML=("RESULTADO : "+final);
                break;
        }

		return true;
	}else{
		return false;
	}
}



