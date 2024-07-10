# Buscador de CEP

O **Buscador de CEP** é uma aplicação simples que permite aos usuários buscar informações de endereço apenas digitando o CEP.

## Funcionalidades

- Busca rápida e precisa de endereços através do CEP
- Interface amigável e fácil de usar

## Tecnologias Utilizadas

- Node.js
- Express
- Docker

## Pré-requisitos

- Docker instalado em sua máquina. Você pode seguir as instruções de instalação no [site oficial do Docker](https://docs.docker.com/get-docker/).

## Como Executar a Aplicação

### Usando Docker

A maneira mais fácil e rápida de executar a aplicação é utilizando Docker. Basta executar o comando abaixo para puxar a imagem do Docker Hub e iniciar o container:

```bash
docker pull zurtrah/buscador-de-cep:latest
docker run -p 3000:3000 zurtrah/buscador-de-cep:latest 
```

```bash
git clone https://github.com/a32fred/buscador-de-cep.git
cd buscador-de-cep
```

```bash
npm install 
```

````bash
npm start
```

<hr/>

## Contribuições

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

Faça um fork deste repositório
Crie uma nova branch: git checkout -b minha-nova-funcionalidade
Faça suas alterações e commit: git commit -m 'Adiciona minha nova funcionalidade'
Envie para a branch original: git push origin minha-nova-funcionalidade
Crie um pull request