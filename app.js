function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultado = "";

    // Itera sobre cada dado (atleta) da lista de dados - arquivo DADOS.JS
    for (let dado of dados) {
        // Cria um novo elemento div para cada atleta
        resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}