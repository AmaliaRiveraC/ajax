var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
  var url = "http://swapi.co/api/people/";
$.getJSON(url, function(response) {
  var personajes = response.results;
  var total = response.count;
  mostrarPersonajes(personajes);
  mostrarTotalPersonajes(total);
});
};

var mostrarPersonajes = function (personajes) {
    var $ul = $("#personajes");
    personajes.forEach(function (personaje) {
        var $li = $("<li />");
        $li.text(personaje.name + "-" + personaje.height);
        $ul.append($li);
      });
    };
  var mostrarTotalPersonajes = function(total) {
      var $contenedorTotal = $("#total").text(total);
    }                     

    $(document).ready(cargarPagina);
