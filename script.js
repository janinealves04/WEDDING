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
    document.getElementById('overlay').style.display = 'block';
  }

  function fecharSidebar(){
    document.getElementById('sidebar').classList.remove('ativo');
    document.getElementById('overlay').style.display = 'none';
  }

  const destino = new Date("August 16,2025 17:00").getTime();

  setInterval (function(){
    let dataAtual = new Date().getTime(); //data atual em milisegundos

    let segTotal = (destino - dataAtual)/1000; //diferença
    let dias = parseInt(segTotal/86400); //desfinido dia
    segTotal = segTotal%86400;

    let horas = parseInt(segTotal/3600);//desfinindo horas
    segTotal = segTotal%3600;

    let minutos = parseInt(segTotal/60);//desfinindo minutos
    let segundos = parseInt(segTotal%60);//desfinindo segundos
    
    document.getElementById('dias').innerHTML =dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;


    if (dias === 0){
      document.querySelector('#countdown h1').textContent = "Chegou o grande dia!";
    }

  },1000);

// mostrar home ao carregar
window.onload = () => {
  mostrarSecao('home');
};




