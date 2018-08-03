$(document).ready(function () {
    $("#Aceptar").click(function () {
        const pokeselect = $("#pokeselect").val();
        if (pokeselect !== "") {
            //Seccion Informacion
            $("#informacion").html(`
            <div class="ui stackable five column grid">
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">
                        Imagen
                    </h2>
                    <div id="imagen-dex"></div><br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">
                        Datos
                    </h2>
                    <div id="datos-dex"></div><br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">
                        Descripción
                    </h2>
                    <div id="desc-dex"></div><br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">
                        Basica
                    </h2>
                    <div id="basic-dex"></div><br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">
                        Elementos
                    </h2>
                    <div id="element-dex"></div><br>
                </div>
            </div>`);
            //miscelaneo
            $("#miscelaneo").html(`
            <div class="ui stackable four column grid">
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">Estadisticas Base</h2>
                    <div id="estaBase-dex"></div>
                    <br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">Entrenamiento</h2>
                    <div id="train-dex"></div>
                    <br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">Crianza</h2>
                    <div id="crianza-dex"></div>
                    <br>
                </div>
                <div class="column">
                    <h2 id="seg-principal-titulo" class="ui header blue dividing">Sprites</h2>
                    <div id="sprite-dex"></div>
                    <br>
                </div>
            </div>`);
            //limpiar los campos
            $("#mov-nivel").html("");
            $("#mov-mt").html("");
            $("#mov-huevo").html("");
            $("#mov-tutor").html("");
            $("#imagen-dex").html("");
            $("#desc-dex").html("");
            $("#datos-dex").html("");
            $("#basic-dex").html("");
            $("#element-dex").html("");
            $("#estaBase-dex").html("");
            switch (pokeselect) {
                case "Bulbasaur":
                    //numero nombre sexo
                    $("#datos-dex").append(`
                    <br>
                    <br>
                    <br>
                    <br>
                    <p class='ui header blue'>
                        Numero: #001
                    </p>
                    <p class='ui header blue'>
                        Nombre: Bulbasaur
                    </p>
                    <p class='ui header blue'>
                        Sexo: Masculino/Femenino
                    </p>`);
                    //sprite del pokemon
                    $("#imagen-dex").append(`<br><br><br><img class='tamimg' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'/>`);
                    //Descripcion del pokemon
                    $("#desc-dex").append(`
                    <br>
                    <br>
                    <br>
                    <p class='ui header blue'>
                        A Bulbasaur es fácil verle echándose una siesta al sol.
                        La semilla que tiene en el lomo va creciendo cada vez más
                        a medida que absorbe los rayos del sol.
                    </p>`);
                    //peso altura especie habilidad habilidadOculta
                    $("#basic-dex").append(`
                    <br>
                    <br>
                    <br>
                    <p class='ui header blue'>
                        Peso: 6,9kg
                    </p>
                    <p class='ui header blue'>
                        Altura: 0,7m
                    </p>
                    <p class='ui header blue'>
                        Especie: Semilla
                    </p>
                    <p class='ui header blue'>
                        Habilidad: Overgrow
                    </p>
                    <p class='ui header blue'>
                        Habilidad Oculta: Chlorophyll
                    </p>`);
                    //tipo debilidad y resistencia
                    $("#element-dex").append(`
                    <br>
                    <p class='ui header blue'>
                        Tipo:
                    </p>
                    <img src='img/tipos/s_grass_en.png'/><img src='img/tipos/s_poison_en.png'/><br>
                    <p class='ui header blue parrafo'>
                        Debil a:
                    </p>
                    <img src='img/tipos/s_flying_en.png'/><div class='ui label red tipos'>x2</div> <img src='img/tipos/s_fire_en.png'/><div class='ui label red tipos'>x2</div><br>
                    <img src='img/tipos/s_psychic_en.png'/><div class='ui label red tipos'>x2</div> <img src='img/tipos/s_ice_en.png'/><div class='ui label red tipos'>x2</div><br>
                    <p class='ui header blue parrafo'>
                        Resistente a:
                    </p>
                    <img src='img/tipos/s_fighting_en.png'/><div class='ui label green tipos'>x1/2</div> <img src='img/tipos/s_water_en.png'/><div class='ui label green tipos'>x1/2</div><br>
                    <img src='img/tipos/s_grass_en.png'/><div class='ui label green tipos'>x1/4</div> <img src='img/tipos/s_electric_en.png'/><div class='ui label green tipos'>x1/2</div><br>
                    <img src='img/tipos/s_fairy_en.png'/><div class='ui label green tipos'>x1/2</div>`);
                    //movimientos
                    bulbasaur();
                    //Estadisticas Base
                    $("#estaBase-dex").append(`
                    <br>
                    <p class="ui label blue label-nivel1">
                        PS: 45
                    </p><br>
                    <p class="ui label blue label-nivel2">
                        ATK: 49
                    </p><br>
                    <p class="ui label blue label-nivel2">
                        DEF: 49
                    </p><br>
                    <p class="ui label blue label-nivel3">
                        SPATK: 65
                    </p><br>
                    <p class="ui label blue label-nivel3">
                        DEFSP: 65
                    </p><br>
                    <p class="ui label blue label-nivel1">
                        SPD: 45
                    </p>`);
                    $("#train-dex").append(`
                    <br>
                    <div class="ui celled list">
                        <div class="item">
                            <div class="content">
                                <p class='ui header blue'>
                                    EVs que proporciona:
                                </p>
                                <p class='ui header blue'>
                                    1 spatk
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p class='ui header blue'>
                                    Ratio de Captura:
                                </p>
                                <p class='ui header blue'>
                                    5.9% - Pokeball - PS Completos
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p class='ui header blue'>
                                    Velocidad de Crecimiento:
                                </p>
                                <p class='ui header blue'>
                                    Lento-Medio (1.059.860)exp
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p class='ui header blue'>
                                    Experiencia Base:
                                </p>
                                <p class='ui header blue'>
                                    64
                                </p>
                            </div>
                        </div>
                    </div>`);
                    $("#crianza-dex").append(`
                    <br>
                    <p class='ui header blue'>
                        Proporcion de Genero:
                    </p>
                    <div class='ui label blue'>
                        <i class="mars icon"></i>
                        87.5%
                    </div>
                    <div class='ui label pink'>
                        <i class="venus icon"></i>
                        12.5%
                    </div>
                    <br>
                    <br>
                    <p class='ui header blue'>
                        Grupos Huevo:
                    </p>
                    <div class='ui label green'>
                        <i class="info circle icon"></i>
                        Grass
                    </div>
                    <div class='ui label green'>
                        <i class="info circle icon"></i>
                        Monster
                    </div>
                    <br>
                    <br>
                    <p class='ui header blue'>
                        Ciclos de Huevo (Eclosión):
                    </p>
                    <p class='ui header blue'>
                        21 (5.355 Pasos)
                    </p>
                    `);
                    $("#sprite-dex").append(`
                    <br>
                    <p class='ui header blue'>
                        De Frente:
                    </p>
                    <div class="ui two column very relaxed grid">
                        <div class="column">      
                            <p class='ui header blue'>
                                Normal:
                            </p>
                            <img src='https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif'/>
                        </div>
                        <div class="column">
                        <p class='ui header blue'>
                            Shiny:
                            </p>
                            <img src='https://play.pokemonshowdown.com/sprites/xyani-shiny/bulbasaur.gif'/>
                        </div>
                    </div> 
                        <p class='ui header blue'>
                            De Espalda:
                        </p>
                    <div class="ui two column very relaxed grid">
                        <div class="column">
                            <p class='ui header blue'>
                                Normal:
                            </p>
                            <img src='http://play.pokemonshowdown.com/sprites/xyani-back/bulbasaur.gif'/>
                        </div>
                        <div class="column">
                        <p class='ui header blue'>
                            Shiny:
                            </p>
                            <img src='https://play.pokemonshowdown.com/sprites/xyani-back-shiny/bulbasaur.gif'/>
                        </div>
                    </div>                    
                    `);
                    break;
            }
        } else {
            alert("Seleccione un Pokemon")
        }
    });
});