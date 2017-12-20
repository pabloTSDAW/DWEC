// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=cc5a0e2a   ID
// OMDB API: http://www.omdbapi.com/?t=saw&apikey=cc5a0e2a  TITLE
// KEY cc5a0e2a

//MODELO--------------------------------------------------------------------

class Pelicula {
  constructor(id) {
    this.id = id;
  }
}

class Filmoteca {
  constructor() {
    this.almacen = [];
  }

  guardar(objeto) {
    this.almacen.push(objeto);
  }
}

//VISTA---------------------------------------------------------------------

class VistaPelicula {

  limpiar(){
    $('#peliculas').empty();
  }

  verPeliculas(peliculas) {
    for (var i = 0; i < peliculas.length; i++) {
      if (peliculas[i].Poster == "N/A" || !(peliculas[i].Poster)) {
        peliculas[i].Poster = "nodisponible.jpg";
      }
      $('#peliculas').append('<div class="pelicula"><img id="' + peliculas[i].imdbID + '" src="' + peliculas[i].Poster + '" onclick="c.seleccionar(this)"><h2>' + peliculas[i].Title + '</h2><p>' + peliculas[i].Year + '</p></div>');
    }
  }

  elegirPelicula(pelicula) {
    if (pelicula.Poster == "N/A" || !(pelicula.Poster)) {
        pelicula.Poster = "images/nodisponible.jpg";
      }
    $('#peliculas').empty();
    $('#peliculas').append('<div class="peliculaSeleccionada"><div class="portada"><img id="' + pelicula.imdbID + '" src="' + (pelicula.Poster ? pelicula.Poster : 'images/nodisponible.jpg') + '" onclick="c.seleccionar(this)"></div><div class="contenido"><h2>' + pelicula.Title + '</h2><p><span>Year: </span> ' + pelicula.Year + '</p></div></div>');
    $('.contenido').append('<p><span>Genre: </span> ' + pelicula.Genre + '</p><p><span>Director: </span> ' + pelicula.Director + '</p><p><span>Actors: </span> ' + pelicula.Actors + '</p><p><span>Plot: </span> ' + pelicula.Plot + '</p><p><span>Website: </span><a href="' + pelicula.Website + '">' + pelicula.Website + '</a></p>');
  }

}

//CONTROLADOR---------------------------------------------------------------

class Controlador {
  constructor() {
    this.filmoteca = new Filmoteca();
    this.vista = new VistaPelicula();
  }

  peticion(tipo, num) {
    var self = this;
    self.filmoteca.almacen = [];
    var busqueda = $('#busqueda').val();
    $(document).ready(function() {
        $.ajax({
  				url: "http://www.omdbapi.com/?s=" + busqueda + "&apikey=9874a93c&type=" + tipo + "&page=" + num,
  				success: function(resp) {
            console.log(resp);
            for (var i = 0; i < resp['Search'].length; i++) {
              var pelicula = resp['Search'][i];
              self.filmoteca.guardar(pelicula);
            }
            self.vista.verPeliculas(self.filmoteca.almacen);
            comprobar = true;
  				}
  			});
  		});
  	}

    limpiar(pagina) {
      var valor = $('#busqueda').val();
      var tipo = $('.filtro').val();
      if (texto != valor || texto2 != tipo) {
        $('#peliculas').empty();
        this.peticion(tipo, pagina);
        texto = valor;
        texto2 = tipo;
      } else {
        this.peticion(tipo, pagina);
      }
    }

    seleccionar(objeto) {
      this.peticion2(objeto.id);
      moveUp();
    }

    peticion2(id) {
      var self = this;
      $(document).ready(function() {
          $.ajax({
    				url: "http://www.omdbapi.com/?i=" + id + "&apikey=9874a93c&plot=full",
    				success: function(resp) {
              var pelicula = resp;
              console.log(pelicula);
              self.vista.elegirPelicula(pelicula);
              self.vista.verPeliculas(self.filmoteca.almacen);
    				}
    			});
    	});
    }

}


//MAIN--------------------------------------------------------------------------

var c = new Controlador();
var comprobar = false;
var cont = 2;
var texto;
var texto2;

//SCROLL INFINITO
$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if (($(document).height() - win.height() <= (win.scrollTop()) + 20) && ($(document).height() - win.height() >= (win.scrollTop()) - 20)) {
      if (comprobar == true){
        c.peticion(texto2, cont);
        cont++;
        comprobar = false;
      }
    }
  });
});

function moveUp(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
}

//BOTÓN VOLVER INICIO SCROLL
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

//DETECTAR CARGA - ANIMACIÓN
// function cargar(){
//   document.getElementById("carga").style.display="none";
// }
