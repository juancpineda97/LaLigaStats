# LaLigaStats
Proyecto de la asignatura Infraestructura Virtual del grado de Ingeniería Informática de la UGR.
![Logo LaLiga](./docs/img/logo_readme.png)

## Descripción
Cualquier amante del fútbol está acostumbrado a tener aplicaciones que le informan de diversas estadísticas sobre culaquier equipo de fútbol, jugador o competición. Pero, ¿y si además de esto, se quiere disponer de predicciones sobre resultados de futuros encuentros, campeones, goleadores, etc...? Por este motivo nace LaLigaStats, una aplicación que proporciona al usuario cualquier estadística presente de jugadores, partidos, equipos, etc... de La Liga Española de Fútbol, además de una serie de predicciones basadas en estadísticas sobre resultados futuros.

## Herramientas
- La aplicación será una [API REST](https://www.idento.es/blog/desarrollo-web/que-es-una-api-rest/), para poder usar los métodos GET y POST para el paso de parámetros, por ejemplo.
- Usaré como lenguaje de programación [Javascript](https://www.javascript.com/)
- Como Framework usaré [Node.js](https://nodejs.org/es/), ya que permite la programación en el Back-end, es asíncrono y además es un framework muy popular y usado.
- Ya que necesitaré guardar ciertos datos para ser consultados como resultados, jugadores o estadísticas, usaré una base de datos SQL gestionada con [PostgreSQL](https://www.postgresql.org/), ya que es un SGDB de código abierto que gestiona bases de datos relacionales.

## Pasos
En el siguiente [documento](docs/pasos.md) se muestran todos los pasos seguidos para el desarrollo de la aplicación.

## Historias de usuario
En las siguientes historias de usuario se describen las diferentes funcionalidades de la aplicación:

- [(HU01) Ver jugadores de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/4)
- [(HU02) Mostrar datos del jugador](https://github.com/juancpineda97/LaLigaStats/issues/5)

## Documentación
- [Motivación al uso de las herramientas indicadas.](./docs/motivacion_herramientas.md)
- [Configuración git.](./docs/configuracion_git.md)
- [Descripción Clases y Métodos del proyecto.](docs/descripcion_clases.md)

## Autor
[Juan Carlos Pineda](https://github.com/juancpineda97)
