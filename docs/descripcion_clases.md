# Descripción clases y métodos
En este documento se incluirá una descripción de cada clase y método del proyecto.

## Clase: Equipo
Esta clase servirá para crear la instancia Equipo, la cuál representará a cada equipo del campeonato con sus datos como el nombre o la lista de jugadores en él.

### Métodos:
- [constructor(nombre_p, listaJugadores_p)](https://github.com/juancpineda97/LaLigaStats/blob/9d50fe61a937e4afec134d037b19e058b45f42e3/src/equipo.js#L11): Crea los objetos de tipo Equipo, si los parámetros no son del tipo correcto, devuelve un error.

- [verEquipo()](https://github.com/juancpineda97/LaLigaStats/blob/9d50fe61a937e4afec134d037b19e058b45f42e3/src/equipo.js#L26): Este método mostrará los jugadores integrantes del equipo al que se le aplica el método. En el caso de que el equipo esté vacío, devuelve un texto informando de ello.

## Clase: Jugador
Esta clase servirá para crear la instancia Jugador, que reperesentará a cada jugador de LaLiga, con su nombre, equipo, nacionalidad, fecha de nacimiento y valor en millones de euros.

### Métodos:
- [constructor(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p)](https://github.com/juancpineda97/LaLigaStats/blob/73a3732f20a2d8424c21352d794d060636323e9f/src/jugador.js#L14): Crea los objetos de tipo Jugador, y haciendo uso del método comprobarDatos(...), si los parámetros no son del tipo correcto, devuelve un error.
- [verJugador()](https://github.com/juancpineda97/LaLigaStats/blob/73a3732f20a2d8424c21352d794d060636323e9f/src/jugador.js#L33): Este método mostrará los datos del jugador al que se le aplica el método.
- [comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p)](https://github.com/juancpineda97/LaLigaStats/blob/73a3732f20a2d8424c21352d794d060636323e9f/src/jugador.js#L50): Método que comprueba que los datos pasados por parámetro son del tipo correcto para crear un nuevo objeto de la clase, en caso de que lo sean, devuelve true, en otro caso, devuelve false. 

## Clase: Asercion
Esta clase se crea para tener nuestras propias asercionas, que serán muy útiles para los tests. El método `expected(actual)` puede comprobar si el valor actual es igual al esperado, del tipo esperado, si inclyer o no un valor esperado, o si es mayor o menor que el valor esperado, imprimiendo, en caso de fallo, un mensaje personalizado.