# Guia de Design Visual - Site de Aulas de Dança

## Conceito Visual

O design do site foi desenvolvido para transmitir elegância, movimento e energia, características essenciais da dança. A abordagem visual combina modernidade com sofisticação, criando uma experiência que inspira e convida à ação.

## Paleta de Cores

### Cores Primárias
- **Deep Teal (#144D4D)**: Cor principal que transmite profissionalismo e confiança
- **Vibrant Magenta (#E91E63)**: Cor de destaque para CTAs e elementos interativos
- **Warm Orange (#FF8800)**: Cor secundária para acentos e hover states
- **Elegant Gold (#FFD700)**: Cor para elementos premium e destaques especiais
- **Neutral Gray (#F3F556)**: Cor de apoio para textos e backgrounds

### Aplicação das Cores
- **Backgrounds**: Predominantemente brancos e cinzas claros
- **Textos**: Deep Teal para títulos, cinza escuro para corpo do texto
- **CTAs**: Gradientes entre Magenta e Orange
- **Acentos**: Gold para ícones e elementos decorativos

## Tipografia

### Fonte Principal
- **Família**: Sans-serif moderna (similar à Montserrat ou Poppins)
- **Pesos**: Regular (400), Semibold (600), Bold (700)

### Hierarquia Tipográfica
- **H1 (Hero)**: 48px, Bold, Deep Teal
- **H2 (Seções)**: 36px, Semibold, Deep Teal
- **H3 (Subsections)**: 24px, Semibold, Deep Teal
- **Body Text**: 16px, Regular, Cinza escuro
- **CTAs**: 18px, Semibold, Branco

## Layout e Grid

### Sistema de Grid
- **Desktop**: 12 colunas com gutters de 24px
- **Tablet**: 8 colunas com gutters de 20px
- **Mobile**: 4 colunas com gutters de 16px

### Espaçamentos
- **Seções**: 80px de padding vertical
- **Elementos**: Múltiplos de 8px (8, 16, 24, 32, 48, 64)
- **Containers**: Max-width de 1200px

## Componentes Visuais

### Cards de Modalidades
- **Formato**: Retangular com bordas arredondadas (12px)
- **Sombra**: Sutil (0 4px 12px rgba(0,0,0,0.1))
- **Hover**: Elevação aumentada e escala ligeiramente maior
- **Imagem**: Aspect ratio 4:3
- **Conteúdo**: Padding de 24px

### Botões
- **Primário**: Gradiente Magenta para Orange, bordas arredondadas (25px)
- **Secundário**: Outline em Deep Teal, background transparente
- **Hover**: Transição suave de 0.3s
- **Tamanho**: Altura mínima de 48px para acessibilidade

### Ícones
- **Estilo**: Line art minimalista
- **Espessura**: 2px de stroke
- **Cores**: Gold para destaques, Deep Teal para navegação
- **Tamanho**: 24px padrão, 32px para destaques

## Elementos Interativos

### Animações
- **Entrada**: Fade in com slide up (0.6s ease-out)
- **Hover**: Scale 1.05 e mudança de cor (0.3s ease)
- **Scroll**: Parallax sutil em imagens de fundo
- **Loading**: Spinner customizado com cores da marca

### Estados
- **Default**: Cores padrão da paleta
- **Hover**: Intensificação das cores e elevação
- **Active**: Feedback visual imediato
- **Focus**: Outline em Magenta para acessibilidade

## Imagens e Mídia

### Estilo Fotográfico
- **Tom**: Profissional mas caloroso
- **Iluminação**: Natural e bem distribuída
- **Composição**: Dinâmica, capturando movimento
- **Filtros**: Leve aumento de contraste e saturação

### Tratamento de Imagens
- **Overlay**: Gradiente sutil em imagens de fundo
- **Aspect Ratios**: 16:9 para hero, 4:3 para cards, 1:1 para perfis
- **Qualidade**: Alta resolução com otimização para web

## Responsividade

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Adaptações Mobile
- **Navegação**: Menu hambúrguer
- **Tipografia**: Redução de 20% nos tamanhos
- **Espaçamentos**: Redução para 40px entre seções
- **Cards**: Stack vertical em coluna única

## Acessibilidade

### Contraste
- **Texto**: Mínimo 4.5:1 para texto normal
- **Elementos Interativos**: Mínimo 3:1 para elementos grandes
- **Estados de Foco**: Outline visível e contrastante

### Navegação
- **Keyboard**: Todos os elementos interativos acessíveis via teclado
- **Screen Readers**: Alt texts descritivos e landmarks semânticos
- **Touch Targets**: Mínimo 44px para elementos tocáveis

## Microinterações

### Feedback Visual
- **Carregamento**: Skeleton screens para conteúdo
- **Sucesso**: Checkmark animado em verde
- **Erro**: Shake animation em vermelho
- **Progresso**: Barra de progresso animada

### Transições
- **Página**: Fade entre seções (0.4s)
- **Modal**: Scale in/out com backdrop fade
- **Formulários**: Validação em tempo real com feedback visual

