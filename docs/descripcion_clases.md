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
- [verJugador](https://github.com/juancpineda97/LaLigaStats/blob/f8fa6ee0784b2794fd778e89589f534750aec792/src/jugador.js#L26)(): Este método mostrará los datos del jugador al que se le aplica el método.