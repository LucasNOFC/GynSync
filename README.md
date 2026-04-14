# GymSync

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC?style=flat&logo=tailwind-css)

## Resumo de Valor

GymSync oferece uma base sólida para o gerenciamento de academias, focando em simplicidade e usabilidade. Como uma aplicação frontend React, serve como ponto de partida para projetos pequenos a médios, permitindo controle eficiente de membros, pagamentos e planos sem complexidades desnecessárias. Embora limitado a operações client-side e assumindo a existência de uma API backend, prepara o terreno para evoluções incrementais, como integração com sistemas de pagamento reais ou notificações em tempo real.

## Funcionalidades

- **Gerenciamento de Membros**: Cadastro, edição, visualização e exclusão de membros da academia.
- **Pagamentos**: Controle de pagamentos, histórico de transações e status de pagamentos.
- **Planos de Treino**: Criação e gerenciamento de planos de exercícios.
- **Autenticação de Usuários**: Sistema de login e controle de acesso para administradores e usuários.
- **Dashboard**: Visão geral com estatísticas e gráficos.
- **Interface Responsiva**: Design moderno com Tailwind CSS para uma experiência otimizada em dispositivos móveis e desktop.

## Regras de Negócio

### Usuários
- **Acesso Restrito**: Apenas usuários autenticados (administradores) podem acessar funcionalidades de gerenciamento.
  - **Por que?** Garante segurança e controle sobre dados sensíveis da academia.
  - **Trade-offs**: Implementação simples via contexto React, mas não impede manipulação client-side; ideal para protótipos, mas requer backend robusto em produção.
  - **Considerações**: Autenticação baseada em tokens (assumindo API), com redirecionamento automático para login.

### Membros
- **Dados Obrigatórios**: Nome, contato e plano são obrigatórios no cadastro.
  - **Por que?** Evita registros incompletos que dificultam o gerenciamento.
  - **Trade-offs**: Validação client-side rápida, mas vulnerável; combina com validação server-side para integridade.
  - **Considerações**: Status ativo/inativo afeta pagamentos; edição permite correções, mas histórico de mudanças não é mantido.
- **Vinculação a Planos e Pagamentos**: Cada membro deve ter um plano ativo e pagamentos associados.
  - **Por que?** Mantém consistência financeira e de serviços.
  - **Trade-offs**: Simplifica queries, mas aumenta complexidade em mudanças de plano; ideal para academias pequenas.

### Pagamentos
- **Rastreamento por Membro**: Pagamentos são vinculados a membros, com histórico detalhado.
  - **Por que?** Permite monitoramento de inadimplência e planejamento financeiro.
  - **Trade-offs**: Histórico em tabela facilita visualização, mas sem automação (ex: lembretes); adequado para controle manual.
  - **Considerações**: Status (pago/pendente) atualizado manualmente; sem integração com gateways de pagamento.

### Planos
- **Definição Estruturada**: Planos incluem nome, descrição, preço e duração.
  - **Por que?** Padroniza ofertas e facilita cálculos de receita.
  - **Trade-offs**: Flexibilidade em criação, mas sem personalização avançada (ex: planos familiares); suficiente para necessidades básicas.
  - **Considerações**: Tabelas permitem listagem e edição, mas mudanças afetam membros existentes sem migração automática.

## Destaques Técnicos

- **React Moderno**: Utiliza React 19 com hooks para estado e efeitos.
- **Vite para Desenvolvimento Rápido**: Build tool otimizado para HMR e performance.
- **Tailwind CSS**: Estilização utilitária para design responsivo e consistente.
- **React Router DOM**: Navegação client-side com rotas privadas.
- **Axios para Integração**: Cliente HTTP para comunicação com API backend.
- **Recharts para Visualizações**: Gráficos interativos no dashboard.
- **Context API**: Gerenciamento de estado global para autenticação.
- **React Hook Form**: Validação e gerenciamento de formulários eficientes.

## Arquitetura e Decisões Técnicas

### Por que Componentes Reutilizáveis?
- **Benefícios**: Separação de responsabilidades, facilitando manutenção e reutilização (ex: Card, Header).
- **Trade-offs**: Aumento inicial de arquivos, mas reduz duplicação; alinhado com princípios DRY.
- **Alinhamento SOLID**: Single Responsibility Principle em componentes focados.

### Por que Context para Autenticação?
- **Benefícios**: Estado global acessível sem prop drilling; ideal para apps pequenas.
- **Trade-offs**: Não escalável para estados complexos; considere Redux para evoluções.
- **Alinhamento SOLID**: Dependency Inversion via injeção de contexto.

### Estrutura Geral
- **Páginas e Componentes**: Separação clara entre lógica de negócio (pages) e UI (components).
- **Serviços e Utils**: Centralização de chamadas API e utilitários, promovendo testabilidade.
- **Decisão por Vite**: Performance superior em dev, build rápido; trade-off: menos plugins que Webpack, mas suficiente para frontend moderno.

## Limitações Conhecidas

- **Client-Side Only**: Todas operações são simuladas ou assumem API; sem persistência real sem backend.
- **Concorrência**: Não trata conflitos em edições simultâneas (ex: dois admins editando membro).
- **Gateway de Pagamento**: Sem integração real; pagamentos são manuais.
- **Notificações**: Ausência de alertas (ex: pagamentos atrasados).
- **Escalabilidade**: Otimizado para uso individual; não testado em ambientes distribuídos.
- **Segurança**: Autenticação básica; vulnerável a ataques client-side.

Essas limitações mantêm o projeto simples, focado em demonstração e prototipagem.

## Possíveis Evoluções

### Pagamentos Automáticos
- Integração com Stripe/PayPal para cobrança recorrente.
- Benefícios: Reduz inadimplência; trade-offs: Complexidade de compliance e custos.

### Concorrência e Distribuição
- WebSockets para atualizações em tempo real.
- Lock otimista em edições; benefícios: Colaboração; trade-offs: Overhead em rede.

### Notificações e Automação
- Sistema de lembretes por email/SMS.
- Relatórios automáticos; benefícios: Engajamento; trade-offs: Dependência de serviços externos.

### Escalabilidade
- Migração para Next.js ou backend próprio.
- Cache e lazy loading; benefícios: Performance; trade-offs: Complexidade arquitetural.

Priorize evoluções incrementais baseadas em feedback de usuários.

## Requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- API backend para integração (não incluída)

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

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Abra o navegador em `http://localhost:5173`.

## Executando os Testes

Atualmente, não há testes automatizados configurados. Para futuras evoluções, considere adicionar Jest ou Vitest.

## Documentação da API

A aplicação assume uma API REST para operações backend. Endpoints esperados:
- `/api/auth/login`: Autenticação
- `/api/members`: CRUD de membros
- `/api/payments`: Gerenciamento de pagamentos
- `/api/plans`: CRUD de planos

Consulte o arquivo `services/api.js` para detalhes de integração.

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis (Card, Header, etc.)
├── pages/              # Páginas principais (Dashboard, Members, etc.)
├── context/            # Contextos React (AuthContext)
├── routes/             # Configuração de rotas e proteção
├── services/           # Chamadas API (axios)
└── utils/              # Utilitários (auth helpers)
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
