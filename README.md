# Paçoca Shop (MVP)

Um e-commerce focado em produtos para pets com ambiente controlado e preparado para testes E2E de estabilidade. 

## Funcionalidades
- **Login e Autenticação Simples:** Validação via estado estático com uso de senhas curtas (ex: '123') com persistência de sessão.
- **Catálogo de Produtos:** Listagem com itens fictícios preenchidos através de um mock estático json.
- **Carrinho de Compras Efêmero:** Hooks customizados que controlam a seleção de produtos em cache usando o `localStorage`.
- **Checkout Simulado:** Fluxo final que reinicia a jornada após o pagamento. 

## Como Iniciar

1. Navegue até a pasta do projeto web:
   ```bash
   cd pacoca-shop-web
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```

*(O projeto irá rodar no endereço `http://localhost:5173` ou porta subsequente)*

## Como rodar os testes

1. Após iniciar o servidor, abra a suite de QA de Cypress executando o seguinte comando:
   ```bash
   npx cypress open
   ```

---
> Projeto construído utilizando e otimizado com o [antigravity-kit](https://github.com/vudovn/antigravity-kit/) do Vudovn.
