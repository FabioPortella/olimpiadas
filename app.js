function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o campo-pesquisa onde será inserido o texto a ser pesquisado.
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campo pesquisa for vazio
  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite algo no campo de pesquisa</p>";
    return;
  }

  // Inicializa variavéis vazias
  let resultado = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado (atleta) da lista de dados - arquivo DADOS.JS
  for (let dado of dados) {
    // convertendo conteudo das variaveis para 
    campoPesquisa = campoPesquisa.toLowerCase();
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se o campo de pesquisa estiver preenchido pesquise por titulo, descrição ou tags
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
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
  }

  if (!resultado) {
      resultado = "<p>Nada foi encontrado.</p>";
    }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}
