var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
$.ajax("http://swapi.co/api/people/", {
      method: "GET",
      dataType: "json",
      success: function (response) {
        var personajes = response.results;
        var total = (response.count);
        mostrarPersonajes(personajes);
        mostrarTotalPersonajes(total);
      },
  error: function (error) {
    console.log("error", error);
  }
});
};

var mostrarPersonajes = function (personajes) {
    var $ul = $("#personajes");
    personajes.forEach(function (personaje) {
        var $li = $("<li />");
        $li.text(personaje.name + "-" + personaje.skin_color);
        $ul.append($li);
      });
    };
  var mostrarTotalPersonajes = function(total) {
      var $contenedorTotal = $("#total").text(total);
    }                     

    $(document).ready(cargarPagina);
