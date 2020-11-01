#Usaré como base ubuntu en su versión 20.04
FROM ubuntu:20.04

#Actualizo la lista de paquetes, 
#Instalo cUrl,
#Descargo los archivos necesarios para instalar node,
#Desinstalo cUrl,
#Instalo node
RUN apt-get update && \
	apt-get install -y curl && \
	curl -sL https://deb.nodesource.com/setup_14.x | bash && \
	apt-get remove -y curl && \
	apt-get install -y nodejs

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