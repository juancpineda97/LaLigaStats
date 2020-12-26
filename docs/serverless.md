# Serverless

## Resumen
Para este proyecto, se van a implementar dos funciones serverless diferentes, relacionadas con las historias de usuario, y cada una funcionará en un servicio serverless diferente, en este caso, Vercel y Netlify. Además, se implementará otra función serverless que ejecutará el bot de telegram creado, el cuál tendrá disponibles algunas de las funciones del proyecto relacionadas con las HU. A todo esto, se le suma el avance en el código, explicado también más adelante.

## Función Ver jugadores de un equipo
Esta función serverless se corresponde con la siguiente [Historia de usuario](https://github.com/juancpineda97/LaLigaStats/issues/4). Funcionará de tal forma que al pasar por parámetro el nombre de un equipo, se mostrarán los jugadores de éste. Esta función estará desplegada en Vercel, para ello, habrá que configurar este servicio para que se conecte con el repositorio en Github, y realizar la configuración para conectar el repositorio local con el alojado en Vercel, para así, poder realizar desde nuestro PC el despliegue en esta plataforma, tal y como se indica en los ejercicios realizados [1](https://github.com/juancpineda97/Ejercicios-IV/blob/main/ejercicios/tema5.md#ejercicio-1) y [2](https://github.com/juancpineda97/Ejercicios-IV/blob/main/ejercicios/tema5.md#ejercicio-2) del tema de serverless. Una vez dado de alta en Vercel y añadido el repositorio del proyecto cómo se indica en el ejercicio 1, se descargará el sdk de vercel con el comando `npm install -g vercel` y, una vez descargado, se iniciará sesión como aparece en la imagen del ejercicio 1, y, una vez iniciada sesión, se enlazará el repositorio local con el existente en Vercel (que es el mismo de github, ya que se ha configurado anteriormente desde la web) como se puede apreciar en la siguiente imagen:

![vercel_1.png](img/vercel_1.png)

Una vez hecho esto, se podrá realizar el despliegue en Vercel cómo se ve en este ejemplo:

![vercel_2.png](img/vercel_2.png)

Además, también se podrá hacer un despliegue local, antes de ser puesto en fase de producción, que es muy útil para cuando se está en desarrollo y se quiere probar el funcionamiento de nuevos cambios antes de pasar a estar disponibles en línea, por ejemplo:

![vercel_3.png](img/vercel_3.png)

Para que se realice el despliegue de la función deseada, esta estará, tal y como pasaba en el ejemplo del ejercicio 2, en el directorio */api/getEquipo.js*. La función es la siguiente:

![vercel_4.png](img/vercel_4.png)

Cómo se puede ver, no es una función compleja, en ella se obtiene el equipo que es pasado por parámetro, se llama a la función que obtiene la lista de jugadores de este equipo, y se devuelve un json con los datos de los jugadores del equipo, cómo en el ejemplo que se ve a continuación. Si ocurre algún error, se devolverá el código y mensaje de error correspondientes.

![vercel_5.png](img/vercel_5.png)

La función, con un ejemplo que muestra a los jugadores del FC Barcelona, está disponible en el siguiente enlace:

https://la-liga-stats.juancpineda97.vercel.app/api/getEquipo.js?equipo=barcelona

Cómo se puede ver, como parte de la lógica de negocio se hace uso de la función *getJugadoresEquipo(...)* del archivo [utils.js](../src/utils.js), ya que esta funcionalidad se usará más adelante en el bot en telegram, por lo que era conveniente crear un archivo con esta en vez de programarla directamente en la función de Vercel.

Por último, destacar que la integración contínua está presente en esta función, ya que cada vez que se realiza un push al repositorio de la aplicación, automáticamente Vercel realiza un nuevo despliegue de esta, cómo se ve en el siguiente ejemplo de un commit en el repositorio:

![vercel_6.png](img/vercel_6.png)