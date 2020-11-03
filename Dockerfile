#Usaré como base la versión 14.14.0 slim de node
FROM node:14.14.0-slim

#Cambio al usuario node para realizar la instalacion sin el user root
USER node

#Copio el archivo de dependencias de node en el home del user node,
#con usuario y grupo: node
COPY --chown=node:node package.json /home/node

#Instalo las dependencias con npm
RUN npm install

#Uso una variable de entorno para node_modules
ENV PATH=/node_modules/.bin:$PATH

#Creo y cambio el directorio de trabajo a /test
WORKDIR /test

#Establezco que por defecto se ejecuten los test al iniciar el contenedor
CMD ["npm","test"]