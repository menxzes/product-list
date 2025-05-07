# 🍨 Projeto Cardápio de Sobremesas

Este é um projeto web dinâmico de um **cardápio de sobremesas**, desenvolvido com **TypeScript**, **Vite** e **Programação Orientada a Objetos (POO)**. O sistema permite aos usuários navegar pelas opções de sobremesas, adicionar/remover itens do carrinho e visualizar o valor total da compra de forma interativa.

---

## 🚀 Funcionalidades Principais

### 🧁 Renderização dinâmica de produtos

- Os produtos são carregados dinamicamente a partir de um arquivo `data.json`.
- Cada item do cardápio é exibido com nome, imagem, categoria e preço.
- A estrutura de dados é fortemente tipada com **TypeScript**, garantindo robustez na manipulação das informações.

### 🛒 Carrinho de Compras Interativo

- É possível **adicionar e remover** produtos do carrinho com apenas um clique.
- O usuário pode **aumentar ou diminuir a quantidade** de um item diretamente no carrinho.
- O carrinho exibe:
  - O **subtotal por produto** (preço unitário × quantidade)
  - O **valor total da compra** automaticamente atualizado

### ⚙️ Arquitetura e Tecnologias

- Projeto criado com **Vite**, garantindo alta performance e recarregamento rápido durante o desenvolvimento.
- Utiliza **TypeScript** com tipos explícitos em todas as estruturas.
- O código é estruturado com base em **Programação Orientada a Objetos (POO)**:
  - Componentes reutilizáveis
  - Encapsulamento de funcionalidades
  - Separação clara entre dados e comportamentos

---

## 🌐 Acesso via GitHub Pages

Para testar o projeto diretamente no navegador:

👉 [Acesse a versão online do projeto no GitHub Pages](https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO)

---

## 🧪 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/menxzes/sobremesas-dinamico.git

# 2. Acesse a pasta
cd NOME_DO_REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## 💡 Futuras melhorias

- Responsividade total com `srcSet` e `sizes`
- Animações de transição com `Framer Motion`
- Salvamento do carrinho no localStorage
- Integração com sistemas de pagamento

---

## 👨‍💻 Desenvolvido por

**Guilherme Menezes**  
Estudante de Engenharia de Software, apaixonado por código limpo, design funcional e experiências dinâmicas em front-end.
