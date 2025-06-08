const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", () => {
  const categoriaSelecionada = document.querySelector("#categoria").value.toLowerCase();
  const precoMaximoInput = document.querySelector("#preco").value;
  const precoMaximoSelecionado = precoMaximoInput ? parseFloat(precoMaximoInput) : Number.MAX_VALUE;
  
  document.querySelectorAll(".carta").forEach(carta => {
    const categoriaCarta = carta.dataset.categoria.toLowerCase();
    const precoCarta = parseFloat(carta.dataset.preco);
    
    const deveMostrar = 
      (categoriaSelecionada === '' || categoriaSelecionada === categoriaCarta) &&
      precoCarta <= precoMaximoSelecionado;
    
    carta.classList.toggle("mostrar", deveMostrar);
    carta.classList.toggle("esconder", !deveMostrar);
  });
});