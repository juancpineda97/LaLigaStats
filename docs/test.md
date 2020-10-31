# Tests del código
A continuación se exponen los tests de los que dispone el repositorio:

## [equipo-jugador.test.js](../test/equipo-jugador.test.js)
En este archivo se incluyen los tests para las siguientes funcionalidades de la aplicación:

### [Mostrar al usuario los jugadores de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/4)
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L17) que comprueba el funcionamiento del método [verEquipo()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos).
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L24) que comprueba el funcionamiento del método [verEquipo()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos) cuando el equipo dado no tiene ningún jugador.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L29) que comprueba que se le muestren al usuario los jugadores de un equipo correctamente.

### [Mostrar al usuario los datos de un jugador](https://github.com/juancpineda97/LaLigaStats/issues/5)
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L42) que comprueba el funcionamiento del método [verJugador()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos-1).
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L51) que comprueba que se muestren correctamente al usuario los datos de un jugador, comprobado con varios jugadores diferentes.

### [Mostrar al usuario los datos de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/40)
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/test/equipo-jugador.test.js#L112) que comprueba el funcionamiento del método [verPartido()](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/src/partido.js#L87).

Además, en este archivo se incluyen los tests para las siguientes clases:

### [Jugador](../src/jugador.js)
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L72) que comprueba el funcionamiento del constructor de la clase.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L80) que comprueba el funcionamiento del constructor de la clase con tipos de datos no válidos.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L86) que comprueba el funcionamiento del método [comprobarDatos(...)](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos-1) con datos correctos.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L91) que comprueba el funcionamiento del método [comprobarDatos(...)](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos-1) con datos no válidos.

### [Equipo](../src/equipo.js) 
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L100) que comprueba el funcionamiento del constructor de la clase.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/fceea0bad4c07d8b0838582cf0404170623b7a88/test/equipo-jugador.test.js#L105) que comprueba el funcionamiento del constructor de la clase con tipos de datos no válidos.

### [Partido](../src/partido.js)
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/test/equipo-jugador.test.js#L196) que comprueba el funcionamiento del constructor de la clase.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/test/equipo-jugador.test.js#L218) que comprueba el funcionamiento del constructor de la clase con tipos de datos no válidos.
- [Test](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/test/equipo-jugador.test.js#L225) que comprueba el funcionamiento del método [comprobarDatosPartido(...)](https://github.com/juancpineda97/LaLigaStats/blob/262fa4e0893980b826f0be490d89db32b64c5095/src/partido.js#L54).