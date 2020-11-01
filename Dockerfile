#Usaré como base la versión 14.14.0 alpine de node
FROM node:14.14.0-alpine

#Copio el archivo de dependencias de node en la raíz
COPY package.json ./

#Instalo las dependencias con npm
RUN npm install

#Uso una variable de entorno para node_modules
ENV PATH=/node_modules/.bin:$PATH

#Uso el usuario node
USER node

#Creo y cambio el directorio de trabajo a /test
WORKDIR /test

#Establezco que por defecto se ejecuten los test al iniciar el contenedor
CMD ["npm","test"]