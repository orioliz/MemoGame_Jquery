/*
En caso de añadir una imagen al juego solo es necesario añadir un td en HTML nuevo y la imagen en arrayImagenes
*/

        var contadorPruebas=0;
        var anterior=null;
        var imagenElegida;
        var contadorFallos = 0;
        var contadorAciertos =0;
        var arrayImagenes = ["IMAGENES/1.png", "IMAGENES/2.png", "IMAGENES/3.png", "IMAGENES/4.png", "IMAGENES/5.png", "IMAGENES/6.png", "IMAGENES/9.png", "IMAGENES/7.png", "IMAGENES/8.png"];
        var cantidadImagenes = arrayImagenes.length;
        var arrayPosiciones = new Array(cantidadImagenes);
        $(document).ready(function(){
            //Crea las posiciones de la array
                var contadorPosiciones =0;
                while(contadorPosiciones<cantidadImagenes*2){
                    var imagenPonemos = Math.floor((Math.random()*cantidadImagenes));
                    var contadorPosicionesRepetidas =0;
                    for (var x=0; x<contadorPosiciones; x++){
                        if (arrayPosiciones[x]==imagenPonemos) contadorPosicionesRepetidas++;
                    }
                    if (contadorPosicionesRepetidas<2){
                        arrayPosiciones[contadorPosiciones] = imagenPonemos;
                        contadorPosiciones++;
                    }
                }

            //Recogemos cuando clique en un td
            $("td").click(function(){
                contadorPruebas++;
                //Recogemos la casilla
                var casilla = $(this).attr("id");
                if (contadorPruebas>1){
                    imagenElegida = arrayPosiciones[casilla];
                    $("#"+casilla).animate({                      
                        opacity: "1"
                    }, 100);
                    $("#"+casilla).animate({                      
                        opacity: "1"
                    }, 100);
                    window.setTimeout(function(){
                        $("#"+casilla).css("background", "url("+arrayImagenes[imagenElegida]+")");
                    },100);
                    if (arrayPosiciones[casilla]!=arrayPosiciones[anterior]){
                        contadorFallos++;
                        $("#fallosN").html(contadorFallos);
                        window.setTimeout(function(){
                            $("#"+casilla).animate({                           
                            opacity: "1"
                            }, 900);
                            $("#"+casilla).animate({                               
                                opacity: "1"
                            }, 900);
                            $("#"+anterior).animate({                               
                                opacity: "1"
                            }, 900);
                            $("#"+anterior).animate({                                
                                opacity: "1"
                            }, 900);
                            window.setTimeout(function(){
                                $("#"+casilla).css("background", "");
                                $("#"+anterior).css("background", "");
                            },900);
                        },100);
                    }
                    else{ 
                        contadorAciertos++;
                        $("#aciertos").html(contadorAciertos);
                    }
                    contadorPruebas = 0;

                }else{
                    anterior = casilla;
                    imagenElegida = arrayPosiciones[casilla];
                    $("#"+casilla).animate({
                        opacity: "1"
                    }, 900);
                    $("#"+casilla).animate({
                        opacity: "1"
                    }, 900);
                    window.setTimeout(function(){
                        $("#"+casilla).css("background", "url("+arrayImagenes[imagenElegida]+")");
                    },500);
                    contadorPruebas++;
                }
            })
        });