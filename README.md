# GymSync

GymSync é um sistema de gerenciamento completo para academias, desenvolvido com React e Vite. Permite gerenciar membros, pagamentos, planos de treino e usuários de forma eficiente e intuitiva.

## Funcionalidades

- **Gerenciamento de Membros**: Cadastro, edição, visualização e exclusão de membros da academia.
- **Pagamentos**: Controle de pagamentos, histórico de transações e status de pagamentos.
- **Planos de Treino**: Criação e gerenciamento de planos de exercícios.
- **Autenticação de Usuários**: Sistema de login e controle de acesso para administradores e usuários.
- **Dashboard**: Visão geral com estatísticas e gráficos.
- **Interface Responsiva**: Design moderno com Tailwind CSS para uma experiência otimizada em dispositivos móveis e desktop.

## Tecnologias Utilizadas

- **Frontend**: React 19, Vite
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router DOM
- **Gráficos**: Recharts
- **Formulários**: React Hook Form
- **HTTP Client**: Axios
- **Ícones**: Heroicons
- **Linting**: ESLint

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gymsync.git
   cd gymsync
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (porta padrão do Vite).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run lint`: Executa o linter ESLint

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── context/            # Contextos React (ex: AuthContext)
├── routes/             # Configuração de rotas
├── services/           # Serviços (ex: API)
└── utils/              # Utilitários
```

## Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato através das issues do GitHub.
