# SMI - Sales Manager Interface

## Projeto

A interface de gerenciamento de vendas é uma aplicação web cujo objetivo é paadronizar, facilitar e mensurar as vendas sobretudo de micro e pequenas empresas. Seu sistema foi pensado para o ramo do televendas, sobretudo em relação a produtos que necessitem de acompanhamento de envio ou instalação, porém também pode ser usada para quaisquer formas de venda, dada a natureza altamente customizável da interface e de suas regras de negócio.

## Desenvolvimento

Atualmente a interface se encontra na fase de construção inicial da estrutura, ainda imprópria para utilização.

## Serviços oferecidos

A interface completa em seu primeiro lançamento contará com os seguintes serviços:

    Interface de cadastro de vendas;
    Interface de acompanhamento de vendas;
    Integração a banco de dados em MySQL;
    Sistema de configuração das regras de negócio e customização dos campos de dados de venda;
    Sistema de segurança baseado em autenticação com login, senha e níveis de acesso;

## Parâmetros técnicos

Inicialmente, a interface será desenvolvida utilizando:
    HTML, CSS e Javascript no front-end;
    NodeJS no Back-end;
    MySQL no banco de dados;

## Estrutura de arquivos

sales-manager

    static

      data

        --JSON com dados da aplicação, como parâmetros configurados pelo administrador

      images

        --Ícones e imagens do front-end

      pages

        --Páginas HTMl da aplicação

      scripts

        --Scripts do front-end

      styles

        --Estilos de CSS

    config.json (configurações do servidor)

    filehandler.js (leitor de arqquivos, chamado no server.js)

    index.js (arquivo executável no nodejs, faz as chamadas iniciais aos módulos necessários)

    server.js (lógica de servidor, chamado no index.js)

    README.md