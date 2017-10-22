/*BUSCAMINAS*/

var celdas = [];
var tiempo = 200;
var puntos = 0;

var color = 'red';

class Partida {
  constructor(grosor) {
    this.grosor = grosor;
  }

  colocarCeldas() {
    for (var i = 0; i <= 7; i++) {
      for (var j = 0; j <= 7; j++) {
        var pos = 0;
        celdas[pos].posX = i;
        celdas[pos].posY = j;
        celdas[pos].id = String(i) + String(j);
        celdas.push(celdas[pos]);
        celdas.shift();
      }
    }
  }

  sensorProximidad(){
    //Por cada bomba cercana a la casilla, el atributo numero aumenta en 1
    for (var object of celdas){
      if (object.numero != 'BOOM'){
        for (var object2 of celdas){
          //Celdas de arriba, abajo, derecha e izquierda
          if ((object2.numero == 'BOOM' && (object.posX - object2.posX) == 0) && (object.posY - object2.posY) == 1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posX - object2.posX) == 0) && (object.posY - object2.posY) == -1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == 0) && (object.posX - object2.posX) == 1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == 0) && (object.posX - object2.posX) == -1) object.sumaUno();
          //Esquinas
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == 1) && (object.posX - object2.posX) == 1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == -1) && (object.posX - object2.posX) == 1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == 1) && (object.posX - object2.posX) == -1) object.sumaUno();
          else if ((object2.numero == 'BOOM' && (object.posY - object2.posY) == -1) && (object.posX - object2.posX) == -1) object.sumaUno();
        }
      }
    }
  }

  refrescarTablero(){
    //Actualiza el Tablero
    document.close();
    document.write('<h2 style="color:red; text-align:center;">TIME: ' + tiempo + '</h3>');
    document.write('<h3 style="color:blue; text-align:center;">PUNTUACIÓN: ' + puntos + '</h3>');
    document.write("<table border='1' cellspacing='0' align='center'>");
    for (var i = 0; i <= 7; i++) {
      document.write("<tr bgcolor='lightblue' height=\"" + this.grosor + "\">");
      for (var j = 0; j <= 7; j++) {
        var pos = 0;
        if (celdas[pos].tapada == true)
           document.write("<td align='center' width=' " + this.grosor + "'>" + '&nbsp;' + "</td>");
        else{
          if (celdas[pos].numero != 0) document.write("<td align='center' bgcolor='white' style='color:" + celdas[pos].color + "; font-weight: bold;' width=' " + this.grosor + "'>" + celdas[pos].numero + "</td>");
          else document.write("<td align='center' bgcolor='white' style='color:" + celdas[pos].color + "; font-weight: bold;' width=' " + this.grosor + "'>&nbsp;</td>");
        }
        celdas.push(celdas[pos]);
        celdas.shift();
      }
    }
    document.write("</tr>");
    document.write("</table>");
  }

  destapa(object) {
    //Si la celda está tapda, la destapa y muestra el numero
    if (object.tapada == true) {
      object.tapada = false;
      //document.close();
      puntos++;
      this.refrescarTablero();
      return object.numero;
    }
    else alert ("Celda ya abierta");
  }

  pincha(object) {
    //Selecciona una celda para destapar, si es bomba acaba el juego, si es agua, llama a colindantes
    var res = this.destapa(object);
    if ( res == 'BOOM'){
      alert ('FIN');
      this.destaparTodo();
      tiempo = 0;
      }
    else if (res == 0){
      this.colindantes(object);
    }
  }

  colindantes(object){
    //Busca celdas sin bomba colindantes al agua
    for (var object2 of celdas){
      if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posX - object2.posX) == 0) && (object.posY - object2.posY) == 1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posX - object2.posX) == 0) && (object.posY - object2.posY) == -1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == 0) && (object.posX - object2.posX) == 1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == 0) && (object.posX - object2.posX) == -1) this.pincha(object2);

      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == 1) && (object.posX - object2.posX) == 1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == -1) && (object.posX - object2.posX) == 1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == 1) && (object.posX - object2.posX) == -1) this.pincha(object2);
      else if ((object2.numero != 'BOOM' && object2.tapada == true && (object.posY - object2.posY) == -1) && (object.posX - object2.posX) == -1) this.pincha(object2);
    }
  }

  destaparTodo (){
    for (var element of celdas){
      element.tapada = false;
      this.refrescarTablero();
    }
  }

}

class Casilla {
  constructor(posX, posY, numero, id, tapada, color) {
    this.posX = posX;
    this.posY = posY;
    this.numero = 0;
    this.id = id;
    this.tapada = true;
    this.color = 'black';
  }

  cambiaColor(){
    //Cambia el color de las Casillas en funcion de su número
    var num = this.numero;
    switch (num){
      case 1:
        this.color = 'blue';
        break;
      case 2:
        this.color = 'green';
        break;
      case 3:
        this.color = 'red';
        break;
      case 4:
        this.color = 'rgb(16, 15, 113)';
        break;
    }
  }

  sumaUno(){
    this.numero++;
    this.cambiaColor();
  }
}


class Bomba extends Casilla {
  constructor() {
    super();
    super.numero = 'BOOM';
    super.color = 'rgb(110, 12, 29)';
  }
}


//SIN CLASE
function listar() {
  //Coloca las Casillas y las Bombas en una lista y las reordena aleatoriamente
  for (var i = 1; i <= 10; i++) {
    var b = new Bomba();
    celdas.push(b)
  }
  for (var i = 1; i <= 54; i++) {
    var c = new Casilla();
    celdas.push(c);
  }
  celdas = celdas.sort(function() {return Math.random() - 0.5});
}


function fin() {
  t.refrescarTablero();
  tiempo--;
  if (puntos < 54){
    if(tiempo >= 0){
      setTimeout(fin, 1000);
      document.close();
    }
    //else location.assign("fin.html");
  }
  else {
    alert ('HAS GANADO, ENHORABUENA');
    t.destaparTodo();
  }
}


listar();

var t = new Partida(50);
t.colocarCeldas();
t.sensorProximidad();
fin();
