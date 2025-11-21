π Base de Conhecimento Matemático 🧠
!Licença

Uma interface web interativa e responsiva que serve como uma base de conhecimento para vídeos de matemática. O projeto organiza conteúdos por série escolar, permite busca em tempo real e oferece uma experiência de usuário agradável com temas claro e escuro.

(Sugestão: Tire um print da sua aplicação e substitua o link acima para exibir uma prévia real!)

🎯 Objetivo do Projeto
O objetivo principal é criar uma plataforma centralizada e de fácil acesso para estudantes encontrarem vídeos educacionais de matemática, organizados de forma intuitiva por série e tema. A ferramenta visa facilitar os estudos e a revisão de conteúdos de forma rápida e eficiente.

✨ Funcionalidades Principais
📚 Conteúdo Dinâmico: Os cards de conteúdo são gerados a partir de um arquivo data.json, tornando a adição de novos tópicos simples e escalável.
🗂️ Filtragem por Série: Botões de filtro são criados automaticamente, permitindo que o usuário visualize apenas os conteúdos relevantes para um ano escolar específico.
🔍 Busca Inteligente: Uma barra de busca permite encontrar tópicos pesquisando por nome, descrição ou série, com destaque dos termos pesquisados nos resultados.
🎨 Tema Claro e Escuro: Um seletor de tema (☀️/🌙) permite ao usuário alternar entre um layout claro e um escuro. A preferência é salva no navegador para visitas futuras.
▶️ Player de Vídeo Integrado: Ao clicar em "Saiba mais", um modal é aberto com o vídeo do YouTube incorporado, permitindo que o usuário assista ao conteúdo sem sair da página.
📱 Design Responsivo: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis, garantindo uma ótima usabilidade.
⬆️ Botão "Voltar ao Topo": Facilita a navegação em páginas com muito conteúdo, aparecendo conforme o usuário rola a página.
✨ Efeitos e Transições: Animações sutis em botões, links e cards proporcionam um feedback visual agradável e uma experiência de usuário mais polida.
🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando tecnologias web padrão, com foco em boas práticas de HTML semântico, CSS moderno e JavaScript modular.

🌐 Front-End
Tecnologia	Descrição
HTML5	Estruturação semântica do conteúdo com tags como <header>, <main>, <section> e <footer> para maior clareza e acessibilidade.
CSS3	Estilização moderna com Flexbox e Grid Layout para criar um design responsivo e alinhado. O sistema de temas é implementado com Variáveis CSS (custom properties), permitindo a troca de paleta de cores de forma eficiente.
JavaScript (ES6+)	Responsável por toda a interatividade da página: requisições assíncronas (fetch) para carregar os dados, manipulação do DOM para renderizar conteúdo dinâmico, gerenciamento de eventos (filtros, busca, modal, tema) e uso do localStorage para salvar a preferência de tema do usuário.
📦 Bibliotecas e Recursos
Recurso	Utilização
Font Awesome	Biblioteca de ícones utilizada no seletor de tema e nos links do rodapé.
Google Fonts	Importação da fonte "Poppins" para garantir uma tipografia consistente e agradável.
🚀 Como Executar o Projeto
Como este é um projeto front-end puro (HTML, CSS, JS), você não precisa de um servidor complexo para executá-lo.

Clone este repositório:
bash
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:
bash
cd seu-repositorio
Abra o arquivo index.html diretamente no seu navegador de preferência.
E pronto! A aplicação estará funcionando localmente.
