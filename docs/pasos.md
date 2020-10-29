# Pasos del proyecto
En este documento se muestran los pasos seguidos en el desarrollo de este proyecto, ordenados por hitos.

## Hito 0
- Familiarización con el uso de git y GitHub.
- [Fork](https://github.com/juancpineda97/IV-20-21) a mi cuenta del repositorio de la asignatura.
- [Configuración](docs/configuracion_git.md) de git en el repositorio local, así como configuración de la clave público/privada.
- Creación del [proyecto](https://github.com/juancpineda97/LaLigaStats) que desarrollaré para la asignatura en GitHub.
- Documentación del proyecto, con su correspondiente archivo [README](https://github.com/juancpineda97/LaLigaStats/blob/main/README.md), su [licencia](https://github.com/juancpineda97/LaLigaStats/blob/main/LICENSE) y creación del archivo [.gitignore](https://github.com/juancpineda97/LaLigaStats/blob/main/.gitignore).
- Creación del tag correspondiente a la versión [v0.0.2](https://github.com/juancpineda97/LaLigaStats/releases/tag/v0.0.2), versión final del hito 0.

## Hito 1
- Corrección de la [imagen](https://github.com/juancpineda97/LaLigaStats#laligastats) que aparecía en el README, por motivos de copyright.
- Creación del documento con los [pasos](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/pasos.md) del proyecto.
- Creación de [Millestones](https://github.com/juancpineda97/LaLigaStats/milestones) correspondientes a los hitos de la asignatura.
- Creación de diversos [Issues](https://github.com/juancpineda97/LaLigaStats/issues).
- Creación de nuevas historias de usuario.
- Actualización del archivo [README](https://github.com/juancpineda97/LaLigaStats/blob/main/README.md), añadiendo más [herramientas](https://github.com/juancpineda97/LaLigaStats#herramientas) a usar en el proyecto, enlace a los [pasos](https://github.com/juancpineda97/LaLigaStats#pasos) del proyecto y a las [historias de usuario](https://github.com/juancpineda97/LaLigaStats#historias-de-usuario) actuales.
- Actualización del fichero [.gitignore](https://github.com/juancpineda97/LaLigaStats/blob/main/.gitignore).
- Creación de las clases principales [Equipo](https://github.com/juancpineda97/LaLigaStats/blob/main/src/equipo.js) y [Jugador](https://github.com/juancpineda97/LaLigaStats/blob/main/src/jugador.js).
- Creación de los métodos [verEquipo](https://github.com/juancpineda97/LaLigaStats/blob/f8fa6ee0784b2794fd778e89589f534750aec792/src/equipo.js#L21) y [verJugador](https://github.com/juancpineda97/LaLigaStats/blob/f8fa6ee0784b2794fd778e89589f534750aec792/src/jugador.js#L26).
- Creación de un [fichero](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md) con la descripción de las clases y los métodos.
- Creación del fichero [iv.yaml](iv.yaml) para tests.

## Hito 2
- Corrección de la confusión entre aplicación y API REST en el [README](https://github.com/juancpineda97/LaLigaStats/blob/main/README.md).
- Familiarización con el uso e inclusión en el archivo de herramientas de una nueva herramienta a usar, [Node.js](https://nodejs.org/es/).
- Añadido al proyecto un archivo llamado [package.json](package.json), propio de node.js y que servirá para controlar las dependencias del proyecto.
- Elegida nueva herramienta para tests, el framework [Jest](https://jestjs.io/), familiarización con su uso, inclusión en el archivo de [herramientas](https://github.com/juancpineda97/LaLigaStats#herramientas) y en [README](https://github.com/juancpineda97/LaLigaStats/blob/main/README.md).
- Modificado archivo [.gitignore](https://github.com/juancpineda97/LaLigaStats/blob/main/.gitignore) con la inclusión de la excepción de los archivos de [modulos de node](https://github.com/juancpineda97/LaLigaStats/blob/ad3ce0b40b99ffb28f81b2122c1a9069126fa33e/.gitignore#L9).
- Instalación de Jest.
- Inclusión del archivo [package-lock.json](https://github.com/juancpineda97/LaLigaStats/blob/main/package.json), propio de node.js, que también sirve para controlar las dependencias y las versiones instaladas de estas dependencias.
- Cambio en la definición del método [verEquipo()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos) correspondiente al *issue* [(HU01)](https://github.com/juancpineda97/LaLigaStats/issues/4), así como finalización de su implementación.
- Cambio en la definición del método [verJugador()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos-1) correspondiente al *issue* [(HU02)](https://github.com/juancpineda97/LaLigaStats/issues/5), así como finalización de su implementación.
- Se añade nuevo código al método [verEquipo()](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos), para informar de cuando un equipo no tiene jugadores.
- Se añade el fichero [equipo-jugador.test.js](../test/equipo-jugador.test.js) con los tests implementados que se usarán en este proyecto, así como un [documento](test.md) con un listado de los mismos.
- Se completa el archivo README.md con el apartado [Tests](https://github.com/juancpineda97/LaLigaStats#tests) con todos los enlaces de interés respecto a los tests, y una explicación de cómo ejecutarlos.
- Se añade nueva información sobre tests al archivo [iv.yaml](../iv.yaml).
- Se añade un nuevo [milestone](https://github.com/juancpineda97/LaLigaStats/milestone/4), que servirá para asegurar la integridad de los datos manejados en la aplicación.
- Se modifica el constructor de la clase Equipo para que controle que los parámetros son del tipo correcto.
- Se crea el método [comprobarDatos(...)](https://github.com/juancpineda97/LaLigaStats/blob/main/docs/descripcion_clases.md#m%C3%A9todos-1) de la clase Jugador.
- Se crean nuevos [tests](test.md) relacionados con la comprobación del tipo de dato al crear un objeto en las dos clases actuales.
- Se comprueba que el código supera los tests satisfactoriamente :heavy_check_mark:
- Se añade una sección con al información de instalación del proyecto al [README](https://github.com/juancpineda97/LaLigaStats/blob/main/README.md).

## Hito 3
- Se añaden los tributos Dorsal y Posición a la clase del Jugador, para almacenar en cada objeto Jugador su dorsal y posición de juego correspondientes.
- Se realizan los cambios necesarios en los métodos de la clase Jugador para incorporar estos dos atributos
- Se cambia la [documentación](descripcion_clases.md) correspondiente.
- Se modifican los tests para probar esta nueva funcionalidad.
- Se comprueba que el código sigue superando los tests satisfactoriamente :heavy_check_mark:
- Se crea un nuevo archivo: `.git/hooks/prepare-commit-msg` que ejecutarálos tests cada vez que se realiza un commit.