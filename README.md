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

Estrutura de arquivos:

sales-manager
    src
        data
            --JSON com dados da aplicação, como parâmetros cconfigurados pelo administrador
        images
            --Ícones e imagens do front-end
        pages
            --Páginas HTMl da aplicação
        scripts
            --scripts do front-end
    README.md
    server.js