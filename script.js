let cardContainer = document.querySelector(".card-container"); // Seleciona o elemento que vai conter todos os cards.
let dados = []; // Cria um array vazio que irá armazenar os dados do arquivo data.json.

// Carrega os dados do JSON uma vez quando a página é carregada
document.addEventListener('DOMContentLoaded', async () => { // Executa o código somente após o HTML da página ser completamente carregado.
    let resposta = await fetch("data.json"); // Faz uma requisição para buscar o arquivo data.json.
    dados = await resposta.json(); // Converte a resposta (JSON) em um objeto JavaScript e armazena na variável 'dados'.
    renderizarCards(dados); // Chama a função para exibir todos os cards na tela pela primeira vez.
    renderizarFiltros(); // Chama a função para criar os botões de filtro de série.

    // Adiciona um event listener para busca em tempo real a cada tecla digitada
    const campoBusca = document.getElementById('campo-busca'); // Seleciona o campo de input da busca.
    campoBusca.addEventListener('input', iniciarBusca); // Adiciona um "ouvinte" que chama a função iniciarBusca() toda vez que o usuário digita algo.

    // Lógica para o botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top-btn'); // Seleciona o botão "Voltar ao Topo".
    const mainContent = document.querySelector('main'); // Seleciona a área principal de conteúdo que tem a barra de rolagem.

    mainContent.addEventListener('scroll', () => { // Adiciona um "ouvinte" para o evento de rolagem na área principal.
        if (mainContent.scrollTop > 200) { // Se o usuário rolou mais de 200 pixels para baixo...
            backToTopButton.style.display = 'block'; // ...mostra o botão.
        } else { // Senão...
            backToTopButton.style.display = 'none'; // ...esconde o botão.
        }
    });

    backToTopButton.addEventListener('click', () => { // Adiciona um "ouvinte" para o clique no botão.
        mainContent.scrollTo({ // Rola a área principal...
            top: 0, // ...para o topo (posição 0).
            behavior: 'smooth' // ...de forma suave.
        });
    });

    // Lógica para o Modal de Vídeo
    const modal = document.getElementById('video-modal'); // Seleciona o elemento de fundo do modal.
    const closeModal = document.querySelector('.close-modal'); // Seleciona o botão 'X' para fechar o modal.
    const videoIframe = document.getElementById('video-iframe'); // Seleciona o iframe que vai exibir o vídeo.

    closeModal.onclick = () => { // Define o que acontece ao clicar no botão 'X'.
        modal.style.display = 'none'; // Esconde o modal.
        videoIframe.src = ''; // Limpa o 'src' do iframe para parar o vídeo.
    };

    window.onclick = (event) => { // Define o que acontece ao clicar em qualquer lugar da janela.
        if (event.target == modal) { // Se o clique foi diretamente no fundo do modal (e não no conteúdo dele)...
            modal.style.display = 'none'; // ...esconde o modal.
            videoIframe.src = ''; // ...e para o vídeo.
        }
    };

    // Lógica para o Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', () => {
        let theme = 'dark';
        if (themeToggle.checked) {
            theme = 'light';
        }
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});

function renderizarFiltros() { // Função para criar os botões de filtro dinamicamente.
    const filterContainer = document.getElementById('filter-container'); // Seleciona o contêiner dos botões de filtro.
    // Pega todas as séries únicas do JSON
    const series = [...new Set(dados.map(dado => dado.serie))]; // Cria um array com todas as séries, sem repetições.

    // Cria um botão para "Todos"
    const allButton = document.createElement('button'); // Cria um elemento de botão.
    allButton.textContent = 'Todos'; // Define o texto do botão.
    allButton.classList.add('filter-btn', 'active'); // Adiciona as classes de estilo (e 'active' para começar selecionado).
    allButton.onclick = () => filtrarPorSerie('Todos'); // Define que ao clicar, ele filtra por 'Todos'.
    filterContainer.appendChild(allButton); // Adiciona o botão ao contêiner.

    // Cria um botão para cada série
    series.forEach(serie => { // Para cada série única encontrada...
        const button = document.createElement('button'); // ...cria um botão.
        button.textContent = serie; // ...define o texto com o nome da série.
        button.classList.add('filter-btn'); // ...adiciona a classe de estilo.
        button.onclick = () => filtrarPorSerie(serie); // ...define que ao clicar, ele filtra por aquela série.
        filterContainer.appendChild(button); // ...adiciona o botão ao contêiner.
    });
}

async function iniciarBusca() { // Função para filtrar os cards com base no texto digitado.
    // 1. Obter o termo de busca do input e converter para minúsculas
    let termoBusca = document.getElementById('campo-busca').value.toLowerCase(); // Pega o valor do campo de busca e o converte para minúsculas.

    // 2. Filtrar os dados com base no termo de busca
    let resultados = dados.filter(dado => { // Filtra o array 'dados'.
        return dado.nome.toLowerCase().includes(termoBusca) || // Retorna true se o nome do card incluir o termo de busca.
               dado.descricao.toLowerCase().includes(termoBusca) || // OU se a descrição incluir o termo de busca.
               dado.serie.toLowerCase().includes(termoBusca); // OU se a série incluir o termo de busca.
    });

    // 3. Renderizar os cards com os resultados filtrados
    renderizarCards(resultados); // Chama a função para exibir na tela apenas os cards que passaram no filtro.
}

function filtrarPorSerie(serie) { // Função para filtrar os cards ao clicar em um botão de série.
    // Limpa o campo de busca ao usar um filtro
    document.getElementById('campo-busca').value = ''; // Limpa o texto do campo de busca.

    // Atualiza a classe 'active' nos botões
    document.querySelectorAll('.filter-btn').forEach(btn => { // Para cada botão de filtro...
        btn.classList.toggle('active', btn.textContent === serie); // ...adiciona a classe 'active' se for o botão clicado, e remove dos outros.
    });

    if (serie === 'Todos') { // Se o botão clicado foi 'Todos'...
        renderizarCards(dados); // ...renderiza todos os cards.
    } else { // Senão...
        const resultados = dados.filter(dado => dado.serie === serie); // ...filtra os dados pela série selecionada.
        renderizarCards(resultados); // ...e renderiza o resultado.
    }
}

function renderizarCards(dados) { // Função principal que cria e exibe os cards na tela.
    cardContainer.innerHTML = ""; // Limpa completamente o contêiner de cards antes de adicionar os novos.
    const termoBusca = document.getElementById('campo-busca').value.toLowerCase(); // Pega o termo de busca para poder destacá-lo.

    for (let dado of dados) { // Loop que passa por cada item do array de dados a ser renderizado.
        let nome = dado.nome; // Pega o nome do item.
        let descricao = dado.descricao; // Pega a descrição do item.

        // Se houver um termo de busca, destaca ele
        if (termoBusca) { // Se o usuário digitou algo no campo de busca...
            const regex = new RegExp(termoBusca, 'gi'); // ...cria uma Expressão Regular para encontrar o termo (global e sem diferenciar maiúsculas/minúsculas).
            nome = nome.replace(regex, (match) => `<mark>${match}</mark>`); // ...substitui o termo encontrado no nome por ele mesmo dentro de uma tag <mark>.
            descricao = descricao.replace(regex, (match) => `<mark>${match}</mark>`); // ...faz o mesmo para a descrição.
        }

        let article = document.createElement("article"); // Cria um elemento <article> para o card.
        article.classList.add("card"); // Adiciona a classe 'card' para estilização.
        article.innerHTML = ` 
            <div class="card-header">
                <h2>${nome}</h2>
                <span class="card-serie">${dado.serie}</span>
            </div>
            <p>${descricao}</p>
            <a data-video-link="${dado.link}" class="video-btn"><i class="fa-solid fa-circle-play"></i> Saiba Mais</a>
        `; // Define todo o conteúdo HTML do card usando os dados do item.
        cardContainer.appendChild(article); // Adiciona o card recém-criado ao contêiner na página.
    }

    // Adiciona o event listener aos novos botões de vídeo
    document.querySelectorAll('.video-btn').forEach(button => { // Para cada botão "Saiba Mais" que foi renderizado...
        button.onclick = (e) => { // ...adiciona um evento de clique.
            const videoLink = e.target.getAttribute('data-video-link'); // Pega o link do vídeo guardado no atributo 'data-video-link'.
            const videoId = extractVideoID(videoLink); // Extrai apenas o ID do vídeo a partir do link completo.
            if (videoId) { // Se um ID válido foi encontrado...
                const modal = document.getElementById('video-modal'); // ...seleciona o modal.
                const videoIframe = document.getElementById('video-iframe'); // ...seleciona o iframe.
                videoIframe.src = `https://www.youtube.com/embed/${videoId}`; // ...monta o link de "embed" do YouTube e o define como 'src' do iframe.
                modal.style.display = 'flex'; // ...e finalmente, exibe o modal.
            }
        };
    });
}

function extractVideoID(url) { // Função para extrair o ID de um vídeo do YouTube de diferentes formatos de URL.
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // Expressão Regular para encontrar o ID do vídeo.
    const match = url.match(regExp); // Tenta encontrar uma correspondência na URL fornecida.
    return (match && match[2].length === 11) ? match[2] : null; // Se encontrou uma correspondência e ela tem 11 caracteres (tamanho padrão de ID do YouTube), retorna o ID. Senão, retorna nulo.
}