var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
  var url = "http://swapi.co/api/people/";
  $.getJSON(url, function (response) {
    var personajes = response.results;
    var total = response.count;
    mostrarPersonajes(personajes);
    mostrarTotalPersonajes(total);
  });
};

var mostrarPersonajes = function (personajes) {
  var $ul = $("#personajes");
  personajes.forEach(function (personaje, i) {
    var $li = $("<li />");
    $li.addClass("personaje");
    $li.attr("data-url", personaje.homeworld);
    $li.text(personaje.name + "-" + personaje.height);
    $ul.append($li);
  });
};
var mostrarTotalPersonajes = function (total) {
  var $contenedorTotal = $("#total").text(total);
};

var plantillaDetallePlaneta = '<h2>Planeta:__planeta__</h2>' +
  '<p>' +
  '<p><strong>Clima:</strong>__clima__</p>';

var mostrarDetallePersonaje = function () {
  var urlPersonaje = $(this).data("url");
  var $planetaContenedor = $("#detallePlaneta");

  $.getJSON(urlPersonaje, function (response) {
    
    $planetaContenedor.html(plantillaDetallePlaneta
      .replace("__planeta__", response.name)
      .replace("__clima__", response.climate));
  });
};

$(document).on("click", ".personaje", mostrarDetallePersonaje);
$(document).ready(cargarPagina);
