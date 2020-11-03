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

- [Javascript](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/motivacion_herramientas.md#lenguaje-de-programaci%C3%B3n-javascript): Lenguaje de programación.
- [Node.js](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/motivacion_herramientas.md#entorno-de-ejecuci%C3%B3n-nodejs): Entorno de ejecución del lenguaje.
- [Jest](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/motivacion_herramientas.md#framework-test-jest): Framework para ejecutar tests.
- [npm](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/motivacion_herramientas.md#gestor-de-tareas--dependencias-npm): Gestor de tareas / dependencias.
  - Taskfile: [package.json](https://github.com/juancpineda97/LaLigaStats/blob/main/package.json)

## Instalación
Para la instalación de la aplicación se necesita tener instalado **Node.js** y su gestor de módulos, **npm**. Una vez se disponga de este software instalado, para instalar las dependencias de otros módulos de la aplicación basta con ejecutar el siguiente comando situado en la raíz del proyecto:
~~~
npm install
~~~
Esto instalará automáticamente los módulos de los que dependa la aplicación. Además, si se quieren ejecutar los tests del código de la aplicación, basta con ejecutar el comando:
~~~
npm test
~~~

## Docker
Para este repositorio también existe una imagen de Docker, la cuál está disponible para descargar, ejecutar en un contenedor y probar en ella las funcionalidades de la aplicación. En el siguiente [documento](docs/documentacion_docker.md) se explican todos los detalles de que imagen de base se ha usado, el por qué y las diferentes versiones disponibles, además de las buenas prácticas que se han seguido en la construcción del archivo [Dockerfile](Dockerfile) y el uso de Dockerhub. Para descargar la imagen hace falta tener instalado `docker` en el sistema, y se podrá descargar con el siguiente comando, que descargará la versión más actualizada (latest):
~~~
docker pull juancpineda97/laligastats
~~~
Sin embargo este comando sólo descargará la imagen, no la ejecutará. Si se quiere descargar la imagen, y ejecutar montando en ella la carpeta del repositorio, se puede usar el siguiente comando en la **raíz** de la carpeta del repositorio [descargado](https://github.com/juancpineda97/LaLigaStats/archive/main.zip):
~~~
docker run -t -v `pwd`:/test juancpineda97/laligastats
~~~
Y se ejecutarán automáticamente los tests del repositorio en el contenedor con la imagen descargada (latest).

**IMPORTANTE:** Por defecto, al descargar el repositorio de Github, se descarga un zip que contiene dentro una carpeta con los archivos del repositorio, la cuál tiene el nombre con mayúsculas (LaLigaStats). Para montarla al ejecutar el contenedor, docker no admite rutas de archivos con alguna mayúscula, por lo que antes de ejecutar el comando anterior, habría que cambiar el nombre de esta carpeta a, por ejemplo, *laligastats*.

### Dockerhub
La imagen de docker junto con otras versiones de la imagen se han subido a Dockerhub, en esta [sección](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/documentacion_docker.md#dockerhub) se explica como se ha realizado.

### Tags disponibles:
- [`latest`](https://hub.docker.com/layers/juancpineda97/laligastats/latest/images/sha256-74e37d84e4ea78b02c6c53dacccc7012ad84c31c86382fc1f94cadd7f49fcfc1?context=explore)
- [`alpine`](https://hub.docker.com/layers/juancpineda97/laligastats/alpine/images/sha256-b047f51521e37c24d686040428eace080cd2cbb2540be299382a15665dbc4c2c?context=repo)
- [`centos`](https://hub.docker.com/layers/juancpineda97/laligastats/centos/images/sha256-1f815fad1f14e3f14d7a544813592e41a26b7b2aeac6c0f4066516b0b6801575?context=repo)
- [`fedora`](https://hub.docker.com/layers/juancpineda97/laligastats/fedora/images/sha256-1f72718a1d789299835d1dbcc421695f1c0be86bf195df605c5d9bf5a8520530?context=repo)
- [`node`](https://hub.docker.com/layers/juancpineda97/laligastats/node/images/sha256-a74ae872a2465d955674a6fc882b2f30fbc340ddf88faadf586ff88dfcf91c3b?context=repo)
- [`nodealpine`](https://hub.docker.com/layers/juancpineda97/laligastats/nodealpine/images/sha256-00e1c2bf56390d05e1054a7dd7ac64fc4d0dd56e5da11aae899cc1b8dc0e7a54?context=repo)
- [`nodestretchslim`](https://hub.docker.com/layers/juancpineda97/laligastats/nodestretchslim/images/sha256-00e27f9d6ab11e70ba4d66d3f3dccd642181fa4f8b09e0bf49995f39487a4463?context=repo)
- [`ubuntu`](https://hub.docker.com/layers/juancpineda97/laligastats/ubuntu/images/sha256-c52272f7b13931447c730c5cdddbc7613810bb7bbc7dfead059993bd6b090efb?context=repo)

## GitHub Container Registry
También está disponible una [imagen](https://github.com/users/juancpineda97/packages/container/package/laligastats) para este repositorio en GitHub Container Registry, en este [documento](docs/documentacion_github_container.md) se explica como se ha subido a este sitio web. Para instalarla, basta con ejecutar desde la línea de comandos el siguiente comando:
~~~
docker pull ghcr.io/juancpineda97/laligastats:latest
~~~

## Tests
Un buen proyecto debe incluir tests para determinar si un cambio en el código afecta al funcionamiento correcto del mismo, y este proyecto no iba a ser menos. Los tests, como se ha comentado anteriormente, se realizarán con el framework [Jest](https://jestjs.io/) (en el siguiente [documento](./docs/motivacion_herramientas.md) se explica el por qué de su uso), el cuál funciona con archivos de configuración en los que implementan los test, en este caso, los archivos actuales son los siguientes:
- [equipo-jugador.test.js](test/equipo-jugador.test.js)

Además, en el siguiente [documento](docs/test.md) se enumeran con más detalle cada test disponible, ordenados por archivo y clases.

En esta fase del proyecto, se han creado tests para determinar si las siguientes HU cumplen con su función:

- [Ver jugadores de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/4)
  - [Test](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/test.md#mostrar-al-usuario-los-jugadores-de-un-equipo) comprobando su correcto funcionamiento: :heavy_check_mark:
- [Mostrar datos del jugador](https://github.com/juancpineda97/LaLigaStats/issues/5)
  - [Test](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/test.md#mostrar-al-usuario-los-datos-de-un-jugador) comprobando su correcto funcionamiento: :heavy_check_mark:
- [Mostrar datos de un partido](https://github.com/juancpineda97/LaLigaStats/issues/40)
  - [Test](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/test.md#mostrar-al-usuario-los-datos-de-un-partido) comprobando su correcto funcionamiento: :heavy_check_mark:

Para ejecutar los tests, basta con haber seguido los pasos para la instalación del proyecto y ejecutar el siguiente comando estando ubicado en el proyecto:
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

## Historias de usuario
En este [documento](docs/historias_usuario.md) se exponen todas las historias de usuario del proyecto, además de una descripción de ellas.

Las últimas HU creadas y abiertas son las siguientes:

- [(HU01) Ver jugadores de un equipo](https://github.com/juancpineda97/LaLigaStats/issues/4)
- [(HU02) Mostrar datos del jugador](https://github.com/juancpineda97/LaLigaStats/issues/5)
- [(HU03) Mostrar información sobre un partido](https://github.com/juancpineda97/LaLigaStats/issues/40)

## Documentación
- [Motivación al uso de las herramientas indicadas.](./docs/motivacion_herramientas.md)
- [Configuración git.](./docs/configuracion_git.md)

## Autor
[Juan Carlos Pineda](https://github.com/juancpineda97)
