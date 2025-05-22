# next-saas-rbac

Um projeto SaaS com controle de acesso baseado em funções (RBAC), onde usuários podem criar organizações, projetos e gerenciar permissões de membros.

## ✨ Funcionalidades

- Cadastro e login via email/senha ou GitHub
- Criação de organizações e projetos
- Convidar usuários para projetos
- Aceitar ou rejeitar convites
- Trocar roles dos usuários em um projeto
- Controle de permissões com CASL
- API com documentação Swagger (Fastify)

## 🧱 Estrutura do Monorepo

O projeto utiliza **Turborepo** e está organizado da seguinte forma:

```
next-saas-rbac/
├── apps/
│   ├── api/         # API usando Fastify e Prisma
│   └── web/         # Frontend usando Next.js (App Router) e shadcn-ui
├── config/
│   ├── eslint/      # Configuração compartilhada do ESLint
│   ├── prettier/    # Configuração do Prettier
│   └── typescript/  # Configuração do TypeScript
├── packages/
│   ├── auth/        # Permissões com CASL
│   └── env/         # Variáveis de ambiente compartilhadas
├── .env             # Arquivo de variáveis de ambiente (copiar de .envexample)
├── docker-compose.yml # Banco de dados com Docker
```

## 🚀 Tecnologias Utilizadas

- **API:** Fastify, Prisma, Swagger
- **Frontend:** Next.js (App Router), shadcn-ui, KY
- **Auth:** GitHub OAuth, Email/Senha
- **Permissões:** CASL
- **Monorepo:** Turborepo

## 🛠️ Instalação e Execução

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/next-saas-rbac.git
   cd next-saas-rbac
   ```

2. **Instalar dependências na raiz:**

   ```bash
   yarn
   ```

3. **Instalar dependências em todos os workspaces:**

   Em cada pasta `apps/*`, `config/*` e `packages/*`, execute:

   ```bash
   yarn
   ```

4. **Configurar variáveis de ambiente:**

   Copie o arquivo `.envexample` como `.env` na raiz e ajuste as variáveis conforme necessário.

   ```bash
   cp .envexample .env
   ```

5. **Iniciar banco de dados com Docker:**

   ```bash
   docker-compose up -d
   ```

   > Ou configure a URL de conexão manualmente no `.env` caso prefira rodar o banco localmente.

6. **Iniciar API:**

   ```bash
   cd apps/api
   yarn dev
   ```

   A documentação estará disponível em: [http://localhost:3001/documentation](http://localhost:3001/documentation)

7. **Iniciar o Frontend:**

   Em outro terminal:

   ```bash
   cd apps/web
   yarn dev
   ```

   Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
