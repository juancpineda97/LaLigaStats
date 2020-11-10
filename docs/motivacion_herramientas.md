# Motivación Herramientas

## Lenguaje de programación: [Javascript](https://www.javascript.com/)
Como lenguaje de programación he escogido Javascript, porque es un lenguaje muy usado en el mundo laboral, que permite programación tanto en el front-end como en el back-end, además de que así tendré la posibilidad de aprenderlo.

## Entorno de ejecución: [Node.js](https://nodejs.org/es/)
Como entorno de ejecución de Javascript usaré Node.js, ya que es un runtime muy utilizado en este lenguaje, el cuál consta de una gran cantidad de módulos que me ayudarán a la creación de mi aplicación, como por ejemplo, módulos para ejecutar tests; además, permite controlar las dependencias de éstos módulos de forma sencilla al instalar la aplicación en otro sistema.

## Framework test: [Jest](https://jestjs.io/)
Como herramienta para ejecutar tests del código voy a usar Jest, ya que es compatible con Node.js, cuenta con una amplia documentación, está optimizado para realizar los tests cuyos ficheros hayan cambiado (lo que hace que sea más rápida la ejecución de tests mientras se está desarrollando el proyecto y haya crecido el número de tests), y además de esto, ejecuta los tests de forma paralela, distribuida en varias instancias con lo que contrubuye a que se ejecuten con aún más rapidez y eficacia, para que, como se ha expuesto antes, la ejecución de los tests sea más rápida cuando haya una cantidad considerable; y por si fuera poco, detecta los ficheros de tests del proyecto automáticamente. Por todo esto, comparando estas ventajas con las que ofrecen otros frameworks, decidí que este era el que más me convenía.

## Gestor de dependencias: [npm](https://www.npmjs.com/)
Como herramienta para la instalación de las dependencias de otros módulos voy a usar npm. Los motivos son que es una herramienta que viene incorporada con node.js cuando es instalado, por lo que nos ahorramos instalar software adicional, además, me permite elegir a través de sus [taskfile](https://github.com/juancpineda97/LaLigaStats/blob/main/package.json) qué versión de las dependencias quiero que se instale al construir el proyecto, lo cuál es beneficioso ya que así instalaré la versión de las dependencias que sé que funciona correctamente con mi proyecto.

## Gestor de tareas: [grunt](https://gruntjs.com/)
Como herramienta para la creación de tareas ejecutables de mi aplicación usaré grunt, ya que npm es más limitado, y además, grunt me permite crear tareas más sofisticadas y complejas, por lo que será mas útil en el futuro usarlo en vez de npm. Su archivo de configuración es [Gruntfile.js](../Gruntfile.js).