# Rede Solidária FrontEnd

Este é o frontend do projeto **Rede Solidária**, desenvolvido com [Next.js](https://nextjs.org) e TypeScript. O objetivo do projeto é conectar pessoas que desejam ajudar com aquelas que precisam de apoio, promovendo solidariedade e colaboração.

## Sumário

- [Começando](#começando)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
- [Deploy](#deploy)
- [Licença](#licença)

## Começando

Para rodar o projeto localmente, siga os passos abaixo:

```bash
git clone https://github.com/MariaAlic3/Rede-Solidaria-FrontEnd.git
cd Rede-Solidaria-FrontEnd
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera a versão de produção.
- `npm start` — Inicia o servidor em produção.
- `npm run lint` — Executa o linter.

## Estrutura do Projeto

```
src/
  app/                # Páginas e rotas do Next.js
  components/         # Componentes reutilizáveis
  types/              # Tipagens e interfaces
lib/                  # Funções utilitárias e bibliotecas
public/               # Arquivos estáticos (imagens, ícones, etc)
```

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Fonts - Geist](https://vercel.com/font)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)

## Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. Faça um fork deste repositório.
2. Crie uma nova branch: `git checkout -b minha-contribuicao`
3. Faça suas alterações e commit: `git commit -m 'Minha contribuição'`
4. Envie para o seu fork: `git push origin minha-contribuicao`
5. Abra um Pull Request neste repositório.

## Deploy

O deploy deste projeto é feito automaticamente pelo Vercel ao fazer push na branch `main`.

Para mais detalhes, consulte a documentação de [Deploy no Vercel](https://nextjs.org/docs/app/building-your-application/deploying).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ pela equipe Rede Solidária.
