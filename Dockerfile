# Etapa 1: Build da aplicação
FROM node:16 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile a aplicação
RUN npm run build

# Etapa 2: Criação da imagem final
FROM nginx:alpine

# Copie os arquivos estáticos do build para o diretório do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta que o nginx irá rodar
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
