function bulbasaur() {
    $("#mov-nivel").append(`
                    <tr>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> Tackle </td>
                        <td class="center aligned"> 50 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 35 </td>
                        <td class="center aligned"> Causa daño y no tiene ningún efecto secundario. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> 3 </td>
                        <td class="center aligned"> Growl </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 40 </td>
                        <td class="center aligned"> Es un movimiento de sonido que baja un nivel el ataque del objetivo. En combates dobles afecta a ambos oponentes. No afecta a Pokémon con las habilidades corte fuerte, cuerpo puro, humo blanco, guardia metálica o insonorizar. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 7 </td>
                        <td class = "center aligned" > Leech Seed </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 90 </td>
                        <td class = "center aligned" > 10 </td>
                        <td class = "center aligned" > Planta tres semillas en el oponente, las cuales le roban 1/8 de sus PS máximos al final de cada turno. El usuario recupera esa misma cantidad de PS. Si el usuario es cambiado, el Pokémon que pase a ocupar su lugar recibirá esos puntos de salud. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 9 </td>
                        <td class = "center aligned" > Vine Whip </td>
                        <td class = "center aligned" > 45 </td>
                        <td class = "center aligned" > 100 </td>
                        <td class = "center aligned" > 25 </td>
                        <td class = "center aligned" > Causa daño y no tiene ningún efecto secundario. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/fisico.gif'/></td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 13 </td>
                        <td class = "center aligned" > Poison Powder </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 75 </td>
                        <td class = "center aligned" > 35 </td>
                        <td class = "center aligned" > Envenena al objetivo. No afecta a Pokémon de tipo veneno, planta, acero o con la habilidad inmunidad. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_poison_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 13 </td>
                        <td class = "center aligned" > Sleep Powder </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 75 </td>
                        <td class = "center aligned" > 15 </td>
                        <td class = "center aligned" > Duerme al enemigo. No afecta a Pokémon tipo planta o con la habilidad insomnio o espíritu vital. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 15 </td>
                        <td class = "center aligned" > Take Down </td>
                        <td class = "center aligned" > 90 </td>
                        <td class = "center aligned" > 85 </td>
                        <td class = "center aligned" > 20 </td>
                        <td class = "center aligned" > Causa daño y el usuario recibe a su vez 1/4 del daño total ocasionado. No se recibirá daño si el usuario tiene la habilidad cabeza roca. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 19 </td>
                        <td class = "center aligned" > Razor Leaf </td>
                        <td class = "center aligned" > 55 </td>
                        <td class = "center aligned" > 95 </td>
                        <td class = "center aligned" > 25 </td>
                        <td class = "center aligned" > Causa daño y tiene una alta probabilidad de dar un golpe crítico (12,5%). En combates dobles y triples causa daño a todos los oponentes adyacentes al oponente. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 21 </td>
                        <td class = "center aligned" > Sweet Scent </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 100 </td>
                        <td class = "center aligned" > 20 </td>
                        <td class = "center aligned" > Baja dos niveles la evasión del objetivo. En combates dobles y triples afecta a todos los oponentes adyacentes al usuario. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 25 </td>
                        <td class = "center aligned" > Growth </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 20 </td>
                        <td class = "center aligned" > Aumenta en un nivel tanto el ataque como el ataque especial del usuario. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 27 </td>
                        <td class = "center aligned" > Double-Edge </td>
                        <td class = "center aligned" > 120 </td>
                        <td class = "center aligned" > 100 </td>
                        <td class = "center aligned" > 15 </td>
                        <td class = "center aligned" > Causa daño y a causa del daño de retroceso, el usuario pierde el 1/3 de los PS restados al oponente. Los Pokémon con la habilidad cabeza roca no reciben daño. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 31 </td>
                        <td class = "center aligned" > Worry Seed </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 100 </td>
                        <td class = "center aligned" > 10 </td>
                        <td class = "center aligned" > Cambia temporalmente la habilidad del objetivo por insomnio, la cual hace que no se pueda dormir o se despierte si ya lo estaba haciendo. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 33 </td>
                        <td class = "center aligned" > Synthesis </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > - </td>
                        <td class = "center aligned" > 5 </td>
                        <td class = "center aligned" > Es un movimiento que hace que el usuario recupere PS. La cantidad recuperada depende del clima: <br>Con clima lluvioso, granizo o tormenta de arena el usuario recupera el 25% de sus PS máximos<br>Con clima normal el usuario recupera el 50% de sus PS máximos.<br>Con clima soleado el usuario recupera 2/3 de sus PS máximos. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr >
                        <td class = "center aligned" > 37 </td>
                        <td class = "center aligned" > Seed Bomb </td>
                        <td class = "center aligned" > 80 </td>
                        <td class = "center aligned" > 100 </td>
                        <td class = "center aligned" > 15 </td>
                        <td class = "center aligned" > Causa daño y no tiene ningún efecto secundario. </td>
                        <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class = "center aligned" > <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                `);
    $("#mov-mt").append(`
                    <tr>
                        <td class="center aligned"> TM01 </td>
                        <td class="center aligned"> Work Up </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 30 </td>
                        <td class="center aligned"> Aumenta en un nivel el ataque y el ataque especial del usuario. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM06 </td>
                        <td class="center aligned"> Toxic </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 90 </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> Un movimiento que deja al objetivo envenenado. El veneno hara daño en cada turno </td>
                        <td class="center aligned"> <img src='img/tipos/s_poison_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM09 </td>
                        <td class="center aligned"> Venoshock </td>
                        <td class="center aligned"> 65 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> El usuario empapa el objetivo en un líquido venenoso especial. El poder de este movimiento se duplica si el objetivo está envenenado. </td>
                        <td class="center aligned"> <img src='img/tipos/s_poison_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM10 </td>
                        <td class="center aligned"> Hidden Power </td>
                        <td class="center aligned"> 60 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> Un ataque único que varía en tipo dependiendo del Pokémon que lo use. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM11 </td>
                        <td class="center aligned"> Sunny Day </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 5 </td>
                        <td class="center aligned"> El usuario intensifica el sol durante cinco turnos, lo que activa los movimientos de tipo Fuego. Disminuye la potencia de los movimientos de tipo Agua. </td>
                        <td class="center aligned"> <img src='img/tipos/s_fire_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM16 </td>
                        <td class="center aligned"> Light Screen </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 30 </td>
                        <td class="center aligned"> Se coloca una pared de luz maravillosa para reducir el daño de los ataques especiales durante cinco turnos. </td>
                        <td class="center aligned"> <img src='img/tipos/s_psychic_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM17 </td>
                        <td class="center aligned"> Protect </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> Permite al usuario evadir todos los ataques. Su probabilidad de fallar aumenta si se usa en sucesión. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM20 </td>
                        <td class="center aligned"> Safeguard </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 25 </td>
                        <td class="center aligned"> El usuario crea un campo de protección que evita las condiciones de estado durante cinco turnos. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM21 </td>
                        <td class="center aligned"> Frustration </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> Este ataque de poder total se hace más poderoso cuanto menos le gusta al usuario su Entrenador. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM22 </td>
                        <td class="center aligned"> Solar Beam </td>
                        <td class="center aligned"> 120 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> En este ataque de dos turnos, el usuario reúne luz y luego lanza un rayo agrupado en el siguiente turno. </td>
                        <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM27 </td>
                        <td class="center aligned"> Return </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> Este ataque de poder completo se vuelve más poderoso cuanto más le gusta al usuario su Entrenador. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM32 </td>
                        <td class="center aligned"> Double Team </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> Al moverse rápidamente, el usuario hace copias ilusorias de sí mismo para aumentar su evasión. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM36 </td>
                        <td class="center aligned"> Sludge Bomb </td>
                        <td class="center aligned"> 90 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> El lodo insalubre se arroja al objetivo. Esto también puede envenenar al objetivo. </td>
                        <td class="center aligned"> <img src='img/tipos/s_poison_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM42 </td>
                        <td class="center aligned"> Facade </td>
                        <td class="center aligned"> 70 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> Este movimiento de ataque dobla su poder si el usuario es envenenado, quemado o paralizado. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM44 </td>
                        <td class="center aligned"> Rest </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> El usuario va a dormir por dos turnos. Esto restaura completamente el HP del usuario y cura cualquier condición de estado. </td>
                        <td class="center aligned"> <img src='img/tipos/s_psychic_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM45 </td>
                        <td class="center aligned"> Attract </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> Si es el sexo opuesto del usuario, el objetivo se enamora y es menos probable que ataque. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM48 </td>
                        <td class="center aligned"> Round </td>
                        <td class="center aligned"> 60 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> El usuario ataca el objetivo con una canción. Otros pueden unirse a la Ronda para aumentar el poder del ataque. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM49 </td>
                        <td class="center aligned"> Echoed Voice </td>
                        <td class="center aligned"> 40 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> El usuario ataca al objetivo con una voz que hace eco. Si este movimiento se usa cada turno, su poder se incrementa. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM53 </td>
                        <td class="center aligned"> Energy Ball </td>
                        <td class="center aligned"> 90 </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> El usuario obtiene energía de la naturaleza y la dispara al objetivo. Esto también puede disminuir la estadística Sp Def del objetivo. </td>
                        <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM75 </td>
                        <td class="center aligned"> Swords Dance </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> Una danza frenética para elevar el espíritu de lucha. Esto aumenta drásticamente la estadística de ataque del usuario. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM86 </td>
                        <td class="center aligned"> Grass Knot </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 100 </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> El usuario atrapa el objetivo con pasto y lo dispara. Cuanto más pesado sea el objetivo, mayor será el poder del movimiento. </td>
                        <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM87 </td>
                        <td class="center aligned"> Swagger </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 90 </td>
                        <td class="center aligned"> 15 </td>
                        <td class="center aligned"> El usuario enfurece y confunde el objetivo. Sin embargo, esto también aumenta bruscamente la estadística de ataque del objetivo. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM88 </td>
                        <td class="center aligned"> Sleep Talk </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> Mientras está dormido, el usuario usa aleatoriamente uno de los movimientos que conoce. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM90 </td>
                        <td class="center aligned"> Substitute </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 10 </td>
                        <td class="center aligned"> El usuario hace una copia de sí mismo utilizando algunos de sus HP. La copia sirve como el señuelo del usuario. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM96 </td>
                        <td class="center aligned"> Nature Power </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> Este ataque hace uso del poder de la naturaleza. Sus efectos varían según el entorno del usuario. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                    <tr>
                        <td class="center aligned"> TM100 </td>
                        <td class="center aligned"> Confide </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> - </td>
                        <td class="center aligned"> 20 </td>
                        <td class="center aligned"> El usuario le dice al objetivo un secreto, y el objetivo pierde su capacidad de concentración. Esto reduce la estadística de Sp Atk del objetivo. </td>
                        <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                        <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
                    </tr>
                `);
    $("#mov-huevo").append(`
            <tr>
                <td class="center aligned"> Amnesia </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> Aumenta en dos niveles el ataque especial y defensa especial del usuario. </td>
                <td class="center aligned"> <img src='img/tipos/s_psychic_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Charm </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> El usuario mira el objetivo con bastante encanto, por lo que es menos cauteloso. Esto reduce drásticamente su estadística de ataque. </td>
                <td class="center aligned"> <img src='img/tipos/s_fairy_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Curse </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> Un movimiento que funciona de manera diferente para el tipo Fantasma que para todos los demás tipos. </td>
                <td class="center aligned"> <img src='img/tipos/s_ghost_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Endure </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El usuario soporta cualquier ataque con al menos 1 HP. Su probabilidad de fallar aumenta si se usa en sucesión. </td>
                <td class="center aligned"> <img src='img/tipos/s_psychic_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Giga Drain </td>
                <td class="center aligned"> 75 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> Un ataque de drenaje de nutrientes. La HP del usuario se restablece a la mitad del daño sufrido por el objetivo. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Grass Whistle </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 55 </td>
                <td class="center aligned"> 15 </td>
                <td class="center aligned"> El usuario reproduce una agradable melodía que arrulla al objetivo en un sueño profundo. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Grassy Terrain </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El usuario convierte el suelo en pasto durante cinco turnos. Esto restaura el HP del Pokémon en el suelo un poco cada turno y activa Grass-type-moves. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Ingrain </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> El usuario establece raíces que restauran su HP en cada vuelta. Debido a que está enraizado, no puede cambiarse. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Leaf Storm </td>
                <td class="center aligned"> 130 </td>
                <td class="center aligned"> 90 </td>
                <td class="center aligned"> 5 </td>
                <td class="center aligned"> El usuario levanta una tormenta de hojas alrededor del objetivo. El retroceso del ataque reduce drásticamente la estadística de Sp Atk del usuario. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Magical Leaf </td>
                <td class="center aligned"> 60 </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> El usuario dispersa hojas curiosas que persiguen al objetivo. Este ataque nunca falla. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Nature Power </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> - </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> Este ataque hace uso del poder de la naturaleza. Sus efectos varían según el entorno del usuario. </td>
                <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Petal Dance </td>
                <td class="center aligned"> 120 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El usuario ataca al objetivo esparciendo pétalos durante dos o tres turnos. El usuario se confunde. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Power Whip </td>
                <td class="center aligned"> 120 </td>
                <td class="center aligned"> 85 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El usuario gira violentamente sus vides, tentáculos o similares para golpear duramente al objetivo. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Skull Bash </td>
                <td class="center aligned"> 130 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El usuario se mete en la cabeza para elevar su estadística de Defensa en el primer turno, luego golpea al objetivo en el siguiente turno. </td>
                <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Sludge Bomb </td>
                <td class="center aligned"> 90 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> El lodo insalubre se arroja al objetivo. Esto también puede envenenar al objetivo. </td>
                <td class="center aligned"> <img src='img/tipos/s_poison_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
                `);
    $("#mov-tutor").append(`
            <tr>
                <td class="center aligned"> Bind </td>
                <td class="center aligned"> 15 </td>
                <td class="center aligned"> 85 </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> Causa daño durante 2-5 turnos. Resta 1/8 de los PS máximos en cada turno. Hace daño de 1/6 de los PS máximos durante cada turno. </td>
                <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Giga Drain </td>
                <td class="center aligned"> 75 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 10 </td>
                <td class="center aligned"> Causa daño y el usuario recupera el 50% de los PS quitados por el movimiento al objetivo. </td>
                <td class="center aligned"> <img src='img/tipos/s_grass_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Knock Off </td>
                <td class="center aligned"> 65 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 20 </td>
                <td class="center aligned"> Causa daño al objetivo y, si este lleva un objeto equipado, quedará despojado de él de forma temporal durante el combate. Al terminar el combate, el objeto se restaurará. </td>
                <td class="center aligned"> <img src='img/tipos/s_dark_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/fisico.gif'/> </td>
            </tr>
            <tr>
                <td class = "center aligned" > Seed Bomb </td>
                <td class = "center aligned" > 80 </td>
                <td class = "center aligned" > 100 </td>
                <td class = "center aligned" > 15 </td>
                <td class = "center aligned" > Causa daño y no tiene ningún efecto secundario. </td>
                <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                <td class = "center aligned" > <img src='img/dano/fisico.gif'/> </td>
            </tr>
            <tr>
                <td class="center aligned"> Snore </td>
                <td class="center aligned"> 50 </td>
                <td class="center aligned"> 100 </td>
                <td class="center aligned"> 15 </td>
                <td class="center aligned"> Es un movimiento de sonido que causa daño y tiene una probabilidad del 30% de hacer retroceder al objetivo. Este movimiento solamente puede usarse mientras el usuario está dormido, en caso contrario fallará. </td>
                <td class="center aligned"> <img src='img/tipos/s_normal_en.png'/> </td>
                <td class="center aligned"> <img src='img/dano/especial.gif'/> </td>
            </tr>
            <tr>
                <td class = "center aligned" > Synthesis </td>
                <td class = "center aligned" > - </td>
                <td class = "center aligned" > - </td>
                <td class = "center aligned" > 5 </td>
                <td class = "center aligned" > Es un movimiento que hace que el usuario recupere PS. La cantidad recuperada depende del clima: <br>Con clima lluvioso, granizo o tormenta de arena el usuario recupera el 25% de sus PS máximos<br>Con clima normal el usuario recupera el 50% de sus PS máximos.<br>Con clima soleado el usuario recupera 2/3 de sus PS máximos. </td>
                <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
            </tr>
            <tr>
                <td class = "center aligned" > Worry Seed </td>
                <td class = "center aligned" > - </td>
                <td class = "center aligned" > 100 </td>
                <td class = "center aligned" > 10 </td>
                <td class = "center aligned" > Cambia temporalmente la habilidad del objetivo por insomnio, la cual hace que no se pueda dormir o se despierte si ya lo estaba haciendo. </td>
                <td class = "center aligned" > <img src='img/tipos/s_grass_en.png'/> </td>
                <td class = "center aligned" > <img src='img/dano/estado.gif'/> </td>
            </tr>
                `);
}
function ivysaur() {
    
}