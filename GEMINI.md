---
trigger: always_on
---

# GEMINI.md - Paçoca Shop (Rules & AI Kit)

> Este arquivo atua como o "cérebro local" para o assistente de inteligência artificial. Ele define os padrões de codificação, comportamento e roteamento de agentes específicos para a evolução deste projeto comercial.

---

## 🧭 1. IDENTIDADE DO PROJETO E AGENTES

**Contexto:** O projeto `Paçoca Shop` é um E-Commerce Premium focado no mercado de pets.
**Stack Principal:** React, Vite, TailwindCSS (Frontend) e Cypress (E2E Testing).

### Roteamento Automático
O Assistente deve assumir as seguintes *personas* para cada tipo de solicitação:
- Mudanças visuais ou de UI/UX ➡️ **`@frontend-specialist`** (Design Premium, Tailwind e Micro-animações)
- Testes e Qualidade ➡️ **`@test-engineer`** (Cypress E2E, Asserts precisos)
- Decisões arquiteturais ➡️ **`@project-planner`**

---

## 💅 2. DIRETRIZES DE DESIGN E UI (Frontend)

Sempre que atuar no frontend, o agente `@frontend-specialist` **deverá obrigatoriamente:**

1. **Uso Exclusivo do TailwindCSS:** Todas as estilizações devem ocorrer através das classes do Tailwind ou no próprio `tailwind.config.js`. Evitar arquivos CSS avulsos, exceto o `index.css` de configuração.
2. **Design Premium (Glassmorphism):** Menus e painéis modais devem priorizar `backdrop-blur` e `bg-white/80` para manter o aspecto "Glass" (Límpido/Vidro).
3. **Micro-Animações:** Todo botão primário deve ter reações de clique ou hover (ex: `hover:scale-105`, `hover:-translate-y-1`, `transition-all`).
4. **Gradientes Vivos:** Fugir de cores flat puras em headers ou CTAs. Utilize gradientes modernos contínuos (exp: `from-orange-500 to-rose-500`).

---

## 🛠 3. DIRETRIZES DE QUALIDADE (Cypress Ready)

Sempre que atuar no fluxo lógico, o agente `@test-engineer` **deverá obrigatoriamente:**

1. **Blindagem Frontend (`data-cy`):** Qualquer novo botão, campo de texto ou modal interativo inserido no React **DEVE** nascer com o atributo `data-cy="nome-logico"`. O agente não tem permissão para remover tags de `data-cy` existentes.
2. **Cenários Independentes:** Os testes Cypress escritos em `cypress/e2e` não podem depender de testes anteriores. Use estados e stubs como o `localStorage` para injetar comportamento, conforme a nossa fundação.

---

## 🧹 4. DIRETRIZES DE CÓDIGO (Clean Code)

Todo novo código gerado deve respeitar o padrão global de engenharia limpa:
- **Clean e Direto:** Sem super-engenharia. A lógica em React deve usar "Custom Hooks" (como fizemos no `useCart`) quando manipular o LocalStorage.
- **PT-BR Response:** Retornar sempre diálogos, variáveis visuais ou respostas do robô para o usuário estritamente no Português do Brasil.
- **Comentários Semânticos:** Não comente linha a linha. Se uma função precisar de explicação, escreva um pequeno e valioso JSDoc acima da declaração, e não ao lado das sintaxes triviais.

---

> 🔴 **Regra de Ouro (MANDATORY):** A IA sempre checará estas diretrizes ao ser acionada. Caso a regra confronte um pedido pontual do desenvoledor, ela alertará amigavelmente antes de prosseguir!
