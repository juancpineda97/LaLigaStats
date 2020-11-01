#Usaré como base alpine en su version 3.9
FROM alpine:3.9

#Instalo cUrl
RUN apk add --no-cache \
	nodejs \
	npm

# Copio mi archivo de dependencias
COPY package.json ./

# Instalo las dependecias del proyecto con npm
RUN npm install

#Uso una variable de entorno para node_modules
ENV PATH=/node_modules/.bin:$PATH

#Creo y cambio el directorio de trabajo a /test
WORKDIR /test

#Establezco que por defecto se ejecuten los test al iniciar el contenedor
CMD ["npm","test"]
