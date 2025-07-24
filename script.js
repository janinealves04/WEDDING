function mostrarSecao(id){
  // esconder as seções
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.style.display = 'none';
   // secao.classList.remove('mostrar-transicao'); // Remove transição anterior
  });

  // mostrar seção desejada e aplicar transição
  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.style.display = 'block';
    setTimeout(() => {
      secaoSelecionada.classList.add('mostrarTransicao');
    }, 10);
  }

  // atualizar o menu
  const links = document.querySelectorAll('nav a, #sidebar a');
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick')?.includes(id)){
      link.classList.add('active');
    }
  });
  
}
  function abrirSidebar(){
    document.getElementById('sidebar').classList.add('ativo');
  }

  function fecharSidebar(){
    document.getElementById('sidebar').classList.remove('ativo');
  }

// mostrar home ao carregar
window.onload = () => {
  mostrarSecao('home');
};

