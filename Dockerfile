#Usaré como base fedora en su versión 33
FROM fedora:33

#Instalo npm y node
RUN dnf -y update && dnf -y install npm && dnf clean all

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