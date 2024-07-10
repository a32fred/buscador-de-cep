# Usar a imagem base do Node.js
FROM node:18-alpine

# Atualizar o npm para a versão mais recente	
RUN npm install -g npm@latest

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]

