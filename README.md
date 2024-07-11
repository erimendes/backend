# Projeto BACKEND

## Comandos iniciais:

npm init -y

npm i express bcrypt body-parser cloudinary cookie-parser cors dotenv formidable jsonwebtoken moment mongoose socket.io stripe uuid

npm i nodemon -D

## Explicação de cada pacote:

express:

Um framework minimalista e flexível para Node.js que fornece um conjunto robusto de funcionalidades para a construção de aplicativos web e APIs.
bcrypt:

Uma biblioteca para hashing de senhas. Permite criar hashes seguros e verificar senhas de forma segura.
body-parser:

Um middleware que analisa o corpo das requisições HTTP, permitindo que você acesse os dados enviados em formulários ou como JSON.
cloudinary:

Um serviço de gerenciamento de mídia em nuvem que facilita o upload, armazenamento, manipulação e entrega de imagens e vídeos.
cookie-parser:

Um middleware que analisa cookies anexados à solicitação do cliente. Pode ser usado para ler e escrever cookies.
cors:

Um middleware que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing), permitindo que servidores controlem quais origens têm permissão para acessar seus recursos.
dotenv:

Um módulo que carrega variáveis de ambiente de um arquivo .env para process.env, permitindo que você armazene configurações em variáveis de ambiente fora do código.
formidable:

Uma biblioteca para analisar formulários, especialmente úteis para manipular uploads de arquivos.
jsonwebtoken:

Uma biblioteca para gerar e verificar JSON Web Tokens (JWT), que são usados para autenticação segura e transmissão de informações entre partes.
moment:

Uma biblioteca para manipulação e formatação de datas e horas em JavaScript. Simplifica operações como parse, validação, manipulação e formatação de datas.
mongoose:

Uma biblioteca de modelagem de dados para MongoDB e Node.js. Fornece uma solução baseada em esquemas para modelar seus dados, permitindo a validação, construção de consultas e mais.
socket.io:

Uma biblioteca que permite comunicação bidirecional em tempo real entre clientes e servidores. É amplamente usada para implementar funcionalidades como chats, notificações em tempo real, etc.
stripe:

Uma biblioteca para integração com a API de pagamentos da Stripe, permitindo que você processe pagamentos online de maneira segura.
uuid:

Uma biblioteca para gerar identificadores únicos universais (UUIDs). Útil para gerar IDs únicos para objetos, registros de banco de dados, etc.
Esses pacotes ajudam a construir, proteger, gerenciar e otimizar várias partes de uma aplicação web, desde o tratamento de requisições HTTP e autenticação até a manipulação de arquivos e integração de serviços de terceiros.
