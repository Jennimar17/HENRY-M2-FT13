var showFriends = function(){ // con esta funcion muestro la listab de amigos
    $.get("http://localhost:5000/amigos/", function (data) {
      // vanilla javascript
      // console.log(data); //probando que traiga los valores de vuelta del servidor
      $("#lista").empty(); // vacia la lista antes de llenarla
      data.forEach((amigo) => {
        $("#lista").append('<li>' + amigo.name + '  <button onclick="deleteFriend(' + amigo.id + ')">X</button></li>');
      });
    });
   }
  
   $("#boton").click(showFriends);  // GET AJAX
    // console.log("Click en buscar"); //probando que funcione el click
    
  
  
  $("#search").click(function () {
    // console.log("Click en buscar"); //probando que funcione el click
    var id = $("#input").val(); // guardo en id lo que escriben en la casilla de buscar
    // console.log(id); // muestro lo que escribieron en la casilla buscar
    if (id) {
      // solo si ingreso un id entra en el request
      $.get("http://localhost:5000/amigos/" + id, function (data) {
       $('#amigo').text('El amigo '+id+' es '+data.name+'.');
       $("#input").val('');
      });
    } else {
    alert("Debe ingresar un id"); // aparece el alert si no ingreso un id
    $('#amigo').text('');
    };
  });
  
  var deleteFriend = function (idCruz){
  // console.log("Click en delete"); //probando que funcione el click
  var id;
  if(typeof idCruz === 'number') {
    id = idCruz;
  } else {
    id = $("#inputDelete").val();
  };
  if (id) {
    $.ajax({
        url: 'http://localhost:5000/amigos/'+ id,
        type: 'DELETE',
        success: function() {
            // Do something with the result
            $('#sucess').text('El amigo '+id+' fue borrado')
            $("#inputDelete").val('');
            showFriends(); // llamo la funcion que muestra la lista de amigos
        }
    });
    
  } else {
    alert("Debe ingresar un id"); // aparece el alert si no ingreso un id
    };
  }
  
  $("#delete").click(deleteFriend);