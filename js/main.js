//Cargar el changelogs al index
$(function () {
  $("#Changelogs").load("changelogs.html");
});
$(document).ready(function () {
  console.log("Design By: Japr07");
  //cambiar la version del titulo de las paginas
  var version = "0.11";
  var npagina = location.href.split("/").slice(-1);
  tituloc = document.getElementById("tituloc");
  titulob = document.getElementById("titulob");
  switch (npagina[0]) {
    case "":
      tituloc.innerHTML = "<title>PokeHelp v" + version + "</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>Bienvenidos al PokeHelp v" + version;
      break;
    case "index.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + "</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>Bienvenidos al PokeHelp v" + version;
      break;
    case "pokedex.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Pokedex</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>PokeHelp v" + version + " - Pokedex</h2>";
      break;
    case "calculadora.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Calculadora</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>PokeHelp v" + version + " - Calculadora</h2>";
      break;
    case "dextipos.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Dex de Tipos</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>PokeHelp v" + version + " - Dex de Tipos</h2>";
      break;
    case "boss.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Boss PRO</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header green dividing'>PokeHelp v" + version + " - Boss PRO</h2>";
      break;
    default:
      break;
  }
  //Activar el dropdown de semantic UI
  $('.ui.dropdown').dropdown({
    action: 'activate'
  });
  $('#naturaleza').dropdown();
});