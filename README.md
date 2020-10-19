# LaLigaStats
Proyecto de la asignatura Infraestructura Virtual del grado de Ingeniería Informática de la UGR.
![Logo LaLiga](./docs/img/logo_readme.png)

## Descripción
Cualquier amante del fútbol está acostumbrado a tener aplicaciones que le informan de diversas estadísticas sobre cualquier equipo de fútbol, jugador o competición. Pero, ¿y si además de esto, se quiere disponer de predicciones sobre resultados de futuros encuentros, campeones, goleadores, etc...? Por este motivo nace LaLigaStats, una aplicación que proporciona al usuario cualquier estadística presente de jugadores, partidos, equipos, etc... de La Liga Española de Fútbol, además de una serie de predicciones basadas en estadísticas sobre resultados futuros.

La motivación de elegir este proyecto reside en que hay muy pocas aplicaciones que además de mostrar estadísticas de fútbol, muestren buenas predicciones sobre los acontecimientos que puedan pasar en un partido; y además, al ser el fútbol un deporte con muchos seguidores, esta aplicación será de ayuda para bastantes aficionados.

La aplicación contará con una [API REST](https://www.idento.es/blog/desarrollo-web/que-es-una-api-rest/), para poder usar los métodos GET y POST para el paso de parámetros, por ejemplo. Además, estará programada en el lenguaje de programación [Javascript](https://www.javascript.com/).

La idea es empezar desarrollando una aplicación sencilla que muestre estadísticas de partidos de La Liga Española, para luego incorporar las predicciones sobre eventos de los partidos de la jornada. Una vez desarrollada una versión estable con estas características, se empezará a trabajar en mejoras como la posibilidad de mostrar estadísticas y predicciones en tiempo real sobre partidos que estén en juego, añadir más competiciones, la mejora del algoritmo de predicciones, etc...

## Herramientas
En el siguiente [documento](./docs/motivacion_herramientas.md) se describen las herramientas utilizadas así como la motivación para usarlas, las cuales son:

- [Javascript](https://www.javascript.com/): Lenguaje de programación.
- [Node.js](https://nodejs.org/es/): Entorno de ejecución del lenguaje.
- [Jest](https://jestjs.io/): Framework para ejecutar tests.

## Instalación
Para la instalación de la aplicación se necesita tener instalado **Node.js** y su gestor de módulos, **npm**. Una vez se disponga de este software instalado, para instalar las dependencias de otros módulos de la aplicación basta con ejecutar el siguiente comando situado en la raíz del proyecto:
~~~
npm install
~~~
Esto instalará automáticamente los módulos de los que dependa la aplicación. Además, si se quieren ejecutar los tests del código de la aplicación, basta con ejecutar el comando:
~~~
npm test
~~~

## Pasos
En el siguiente [documento](docs/pasos.md) se muestran todos los pasos seguidos para el desarrollo de la aplicación.
También se pueden ver con estos enlaces los diferentes *issues* y *milestones* creados:
- [Issues](https://github.com/juancpineda97/LaLigaStats/issues)
- [Milestones](https://github.com/juancpineda97/LaLigaStats/milestones)

## Descripción del código
Además, en este otro [documento](docs/descripcion_clases.md) se muestra una descripción de la funcionalidad de las clases y métodos del proyecto.

## Tests
Un buen proyecto debe incluir tests para determinar si un cambio en el código afecta al funcionamiento correcto del mismo, y este proyecto no iba a ser menos. Los tests, como se ha comentado anteriormente, se realizarán con el framework [Jest](https://jestjs.io/) (en el siguiente [documento](./docs/motivacion_herramientas.md) se explica el por qué de su uso), el cuál funciona con archivos de configuración en los que implementan los test, en este caso, los archivos actuales son los siguientes:
- [equipo-jugador.test.js](test/equipo-jugador.test.js)

Además, en el siguiente [documento](docs/test.md) se enumeran con más detalle cada test disponible, ordenados por archivo y clases.

Para ejecutar los tests, basta con haber seguido los pasos para la instalación del proyecto y ejecutar el siguiente comando estando ubicado en el proyecto:
~~~
npm test
~~~

## Historias de usuario
En este [documento](docs/historias_usuario.md) se exponen todas las historias de usuario del proyecto, además de una descripción de ellas.

Las últimas HU creadas y abiertas son las siguientes:

- [(HU01) Ver jugadores de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/4)
- [(HU02) Mostrar datos del jugador](https://github.com/juancpineda97/LaLigaStats/issues/5)

## Documentación
- [Motivación al uso de las herramientas indicadas.](./docs/motivacion_herramientas.md)
- [Configuración git.](./docs/configuracion_git.md)

## Autor
[Juan Carlos Pineda](https://github.com/juancpineda97)
