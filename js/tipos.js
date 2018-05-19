$(document).ready(function () {
    $("#Aceptar").click(function () {
        tiposelect1 = $("#tiposelect1").val();
        if (tiposelect1 !== "") {
            switch (tiposelect1) {
                case "Bug":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/bug_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x2<br>');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x2<br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x1/2<br>');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2<br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_psychic_en.png">x2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">x2<br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x1/2<br><br>');
                    break;
                case "Dark":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/dark_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ghost_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_psychic_en.png">Nulo <br>');
                    $('#resultado1').append('<img src="img/tipos/s_dark_en.png">x1/2<br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_psychic_en.png">x2<br><br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">x1/2<br><br>');
                    break;
                case "Dragon":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/dragon_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_dragon_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x1/2<br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png"> Nulo <br><br>');
                    break;
                case "Electric":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/electric_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_electric_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">Nulo<br><br>');
                    break;
                case "Fairy":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/fairy_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x2 <br><br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_dark_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_dragon_en.png">Nulo');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    break;
                case "Fighting":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/fighting_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_psychic_en.png">x2 <br><br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_dark_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x1/2 ');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_normal_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_psychic_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">Nulo <br>');
                    break;
                case "Fire":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/fire_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2<br> ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x1/2 <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_ice_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2<br>');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x1/2 <br><br>');
                    break;
                case "Flying":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/flying_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">Nulo <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_electric_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2<br><br>');
                    break;
                case "Ghost":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/ghost_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_dark_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ghost_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_normal_en.png">Nulo ');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">Nulo <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_psychic_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_normal_en.png">Nulo <br>');
                    break;
                case "Grass":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/grass_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x2<br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x1/2 ');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x2 <br><br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    break;
                case "Ground":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/ground_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x2 <br><br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">Nulo <br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_electric_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">Nulo <br>');
                    break;
                case "Ice":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/ice_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x1/2 ');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ice_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x1/2 <br>');
                    break;
                case "Normal":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/normal_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x2 <br><br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ghost_en.png">Nulo <br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<h3 style="margin: 11.5px !important;">Ninguno<h3>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">Nulo ');
                    break;
                case "Psychic":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/psychic_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_dark_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_ghost_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_psychic_en.png">x1/2 <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x2 <br><br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_psychic_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_dark_en.png">Nulo <br>');
                    break;
                case "Poison":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/poison_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_psychic_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x1/2 <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_poison_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ghost_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">Nulo <br>');
                    break;
                case "Rock":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/rock_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_normal_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">x1/2 <br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_bug_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_flying_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ice_en.png">x2 <br><br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fighting_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    break;
                case "Steel":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/steel_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fighting_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_ground_en.png">x2 <br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_bug_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_dragon_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_fairy_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_flying_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_normal_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_psychic_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_rock_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_poison_en.png">Nulo <br><br>');
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fairy_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ice_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_electric_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x1/2 <br>');
                    break;
                case "Water":
                    //limpiar el texto
                    $("#resultado1").text("");
                    $("#resultado2").text("");
                    $("#cabecera").html('<br><img src="img/tipos/water_en.png">');
                    //recibe daño
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Debil Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_electric_en.png">x2 ');
                    $('#resultado1').append('<img src="img/tipos/s_grass_en.png">x2 <br><br><br>');
                    $('#resultado1').append('<h3 id="seg-principal-titulo" class="ui header blue">Resistente Contra:</h3><br>');
                    $('#resultado1').append('<img src="img/tipos/s_fire_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_ice_en.png">x1/2 <br>');
                    $('#resultado1').append('<img src="img/tipos/s_steel_en.png">x1/2 ');
                    $('#resultado1').append('<img src="img/tipos/s_water_en.png">x1/2 <br>');
                    
                    //hace daño
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_fire_en.png">x2 ');
                    $('#resultado2').append('<img src="img/tipos/s_ground_en.png">x2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_rock_en.png">x2 <br><br>');
                    $('#resultado2').append('<h3 id="seg-principal-titulo" class="ui header blue">Poco Efectivos Contra:</h3><br>');
                    $('#resultado2').append('<img src="img/tipos/s_dragon_en.png">x1/2 ');
                    $('#resultado2').append('<img src="img/tipos/s_grass_en.png">x1/2 <br>');
                    $('#resultado2').append('<img src="img/tipos/s_water_en.png">x1/2 ');
                    break;
                default:
                    break;
            }
        } else {
            alert("Seleccione un Tipo Primario")
        }
    });
});