# π Base de Conhecimento Matemático 🧠 https://alessandroleonello.github.io/imersao-dev-10/

Esse é um projeto inicial desenvolvido para a imersão Dev Alura e Google Gemini 2025. Ao projeto ainda podem ser acrescentadas várias funcionalidades.

Uma interface web interativa e responsiva que serve como uma base de conhecimento para vídeos de matemática. O projeto organiza conteúdos por série escolar, permite busca em tempo real e oferece uma experiência de usuário agradável com temas claro e escuro.

<img width="1918" height="853" alt="image" src="https://github.com/user-attachments/assets/282ac912-4786-4238-b8c1-b09cec08bf4a" href="https://alessandroleonello.github.io/imersao-dev-10/" />


## 🎯 Objetivo do Projeto

O objetivo principal é criar uma plataforma centralizada e de fácil acesso para estudantes encontrarem vídeos educacionais de matemática, organizados de forma intuitiva por série e tema. A ferramenta visa facilitar os estudos e a revisão de conteúdos de forma rápida e eficiente.

## 🎯 A Importância e Utilidade do Projeto no Brasil
Este projeto vai além de ser apenas um agregador de links; ele se posiciona como uma ferramenta estratégica e de alto impacto para o cenário educacional brasileiro, por diversas razões fundamentais:

**1. Democratização do Acesso à Educação de Qualidade 🎓**
O Brasil é marcado por uma profunda desigualdade educacional. A qualidade do ensino, especialmente em matemática, pode variar drasticamente entre escolas públicas e privadas, e entre diferentes regiões do país.

Esta plataforma atua como um equalizador, oferecendo a qualquer estudante com acesso à internet um roteiro de estudos organizado e alinhado com a Base Nacional Comum Curricular (BNCC). Ela organiza o vasto universo de conteúdo gratuito do YouTube, que muitas vezes é de alta qualidade, mas disperso e difícil de encontrar. Ao fazer essa curadoria, o projeto entrega um material de reforço de excelência sem nenhum custo, diminuindo a dependência de caros cursinhos ou tutores particulares.

**2. Ferramenta de Apoio e Reforço Escolar 📚**
A matemática é consistentemente apontada como uma das maiores dificuldades para os alunos brasileiros. A "Base de Conhecimento Matemático" serve como um apoio didático sob demanda, permitindo que o estudante:

- Revise um conteúdo antes de uma prova.
= Recupere uma aula que perdeu ou não entendeu.
- Tenha uma segunda explicação sobre um tema complexo, com uma abordagem diferente daquela vista em sala de aula.
- Estude com autonomia, seguindo a organização por série para avançar no seu próprio ritmo.
- 
**3. Relevância Pós-Pandemia 😷**
A pandemia de COVID-19 acentuou as lacunas de aprendizagem. Muitos estudantes tiveram o ensino prejudicado e precisam correr atrás do tempo perdido. Esta ferramenta é um recurso valioso para a recomposição da aprendizagem, permitindo que os alunos revisitem tópicos essenciais de anos anteriores de forma estruturada e autônoma.

**4. Usabilidade e Acessibilidade no Contexto Brasileiro 📱**
O projeto foi pensado para a realidade do Brasil, onde o celular é o principal meio de acesso à internet para a maioria da população. Com um design responsivo e uma interface limpa, a plataforma garante uma experiência de uso fluida em qualquer dispositivo. Funcionalidades como a busca inteligente e os filtros por série tornam a navegação rápida e intuitiva, respeitando o tempo e, muitas vezes, os limitados planos de dados dos usuários.

Em resumo, a Base de Conhecimento Matemático não é apenas um projeto de tecnologia, mas uma iniciativa com um forte potencial de impacto social e educacional. Ele utiliza recursos já existentes e gratuitos (vídeos no YouTube) e os organiza de uma maneira que gera valor real, capacitando estudantes e professores a superarem alguns dos desafios mais persistentes da educação no Brasil.

## ✨ Funcionalidades Principais

*   **📚 Conteúdo Dinâmico**: Os cards de conteúdo são gerados a partir de um arquivo `data.json`, tornando a adição de novos tópicos simples e escalável.
*   **🗂️ Filtragem por Série**: Botões de filtro são criados automaticamente, permitindo que o usuário visualize apenas os conteúdos relevantes para um ano escolar específico.
*   **🔍 Busca Inteligente**: Uma barra de busca permite encontrar tópicos pesquisando por nome, descrição ou série, com **destaque** dos termos pesquisados nos resultados.
*   **🎨 Tema Claro e Escuro**: Um seletor de tema (☀️/🌙) permite ao usuário alternar entre um layout claro e um escuro. A preferência é salva no navegador para visitas futuras.
*   **▶️ Player de Vídeo Integrado**: Ao clicar em "Saiba mais", um modal é aberto com o vídeo do YouTube incorporado, permitindo que o usuário assista ao conteúdo sem sair da página.
*   **📱 Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis, garantindo uma ótima usabilidade.
*   **⬆️ Botão "Voltar ao Topo"**: Facilita a navegação em páginas com muito conteúdo, aparecendo conforme o usuário rola a página.
*   **✨ Efeitos e Transições**: Animações sutis em botões, links e cards proporcionam um feedback visual agradável e uma experiência de usuário mais polida.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web padrão, com foco em boas práticas de HTML semântico, CSS moderno e JavaScript modular.

### 🌐 Front-End

*   **HTML5**: Estruturação semântica do conteúdo com tags como `<header>`, `<main>`, `<section>` e `<footer>` para maior clareza e acessibilidade. O logo é um SVG embutido para permitir estilização dinâmica.

*   **CSS3**:
    *   **Variáveis CSS (Custom Properties)**: O sistema de temas (claro/escuro) é implementado de forma eficiente utilizando variáveis (`--primary-color`, `--bg-color`, etc.), que são redefinidas no seletor `body[data-theme="light"]`.
    *   **Layouts Modernos**: **Flexbox** é usado para alinhar elementos no cabeçalho, filtros e rodapé. **Grid Layout** (`grid-template-columns: repeat(auto-fill, ...)` ) cria a grade de cards responsiva que se adapta automaticamente ao tamanho da tela.
    *   **Design Responsivo**: Uso de **`@media` queries** para ajustar o layout, fontes e disposição dos elementos em tablets e celulares, garantindo uma experiência consistente em qualquer dispositivo.
    *   **Transições e Animações**: Efeitos de `transition` são aplicados em botões, links e cards para criar interações suaves (`:hover`, `:active`). O efeito de `transform: scale()` nos cards fornece um feedback visual elegante.
    *   **Estilização de Componentes**: Estilos customizados para a barra de rolagem (`::-webkit-scrollbar`), modais (`position: fixed`), e outros elementos, criando uma identidade visual coesa para a aplicação.

*   **JavaScript (ES6+)**: Responsável por toda a interatividade da página: requisições assíncronas (`fetch`) para carregar os dados, manipulação do DOM para renderizar conteúdo dinâmico, gerenciamento de eventos (filtros, busca, modal, tema) e uso do `localStorage` para salvar a preferência de tema do usuário.

### 📦 Bibliotecas e Recursos

| Recurso | Utilização |
| :--- | :--- |
| **Font Awesome** | Biblioteca de ícones utilizada no seletor de tema e nos links do rodapé. |
| **Google Fonts** | Importação da fonte "Poppins" para garantir uma tipografia consistente e agradável. |

## 🚀 Como Executar o Projeto

Clique no link: https://alessandroleonello.github.io/imersao-dev-10/

## Funcionalidades Futuras
- Filtrar os contéudos pelo nível de interesse do usuário (Reforço Escolar, Vestibular, Concursos, etc)
- Colocar mais de um vídeo em cada conteúdo (diferentes fontes).
- Adicionar lista de exercícios atrelada aos conteúdos, para o usuário práticar.
- Login para salvar progresso dos exercícios
- Ranking global de exercicios realizados no site (Gamificação)
