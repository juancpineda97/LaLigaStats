#Usaré como base la versión 14.14.0 slim de node
FROM node:14.14.0-slim

#Copio el archivo de dependencias
COPY package.json ./

#Primero, aprovechando que estoy con usuario root, 
#voy a instalar grunt de forma global, crear una carpeta para
#los modulos de node en la raiz y cambiarle el owner al usuario node
#para así poder instalar sin modo superusuario
RUN npm install -g grunt-cli && \
	mkdir node_modules && \
    chown -R node node_modules

#Cambio al usuario node para instalar las dependencias
USER node

#Instalo las dependencias con npm
RUN npm install

#Cambio al usuario root para borrar package.json, y vuelvo a cambiar
#al usuario node para ejecutar los tests
USER root
RUN rm package*.json
USER node

#Uso una variable de entorno para indicar donde se ubica node_modules
ENV PATH=/node_modules/.bin:$PATH

#Creo y cambio el directorio de trabajo a /test
WORKDIR /test

#Establezco que por defecto se ejecuten los test al iniciar el contenedor
CMD ["grunt","test"]