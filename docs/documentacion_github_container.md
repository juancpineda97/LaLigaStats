# Documentación Github Container Registry
Además, la imagen que sirve para crear el contenedor se ha subido a Github Container Registry, con el nombre de `ghcr.io/juancpineda97/laligastats:latest`. Para ello, he realizado los siguientes pasos:

- Primero, necesito un *token* de Github para poder conectarme a la página y subir mi imagen. Para ello, se obtiene fácilmente en el apartado *settings* de mi cuenta de Github, añadiendo a la hora de crearla los permisos necesarios para poder subir una imagen.
- Una vez obtenido, lo guardaré en una variable de entorno con el siguiente comando:
    ~~~
    export TOKENGITHUB=[TOKEN OBTENIDO]
    ~~~
- Después de esto, iniciaré sesión con el comando:
    ~~~
    echo $TOKENGITHUB | docker login ghcr.io -u juancpineda97 --password-stdin
    ~~~
    Si se obtiene un mensaje de *Login succeeded*, el login se ha realizado correctamente.

- Luego, crearé un tag a partir de la imagen creada en mi PC, que será el que se subirá a Github. El tag se creará con el comando:
    ~~~
    docker tag [ID imagen] ghcr.io/juancpineda97/laligastats:latest
    ~~~
- Y por último, se subirá este tag con el comando:
    ~~~
    docker push ghcr.io/juancpineda97/laligastats:latest
    ~~~

Ahora aparecerá la imagen en el apartado *Packages* de mi perfil, y bastará con pinchar en él, cambiar la visibilidad a público en los ajustes de éste, y conectarlo con el repositorio de este proyecto, y ya estará disponible para descargar la imagen con el comando:
~~~
docker pull ghcr.io/juancpineda97/laligastats:latest
~~~