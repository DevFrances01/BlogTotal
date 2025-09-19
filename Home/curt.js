// Guarda a posição original de cada post
const posicaoOriginal = [];
window.addEventListener('load', () => {
  const posts = document.querySelectorAll('.post');
  posts.forEach((post, index) => {
    post.dataset.pos = index; // salva a posição
  });

  // Recupera favoritos do LocalStorage
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos.forEach(id => {
    const post = document.querySelector(`.post[data-id="${id}"]`);
    if(post){
      const btn = post.querySelector('button');
      btn.classList.add('favorito');
      post.parentElement.prepend(post); // envia pro topo
    }
  });
});

function toggleFav(btn){
  const post = btn.closest('.post');
  const id = post.dataset.id;
  const container = post.parentElement;
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if(favoritos.includes(id)){
    // Remove do favoritos e volta para posição original
    btn.classList.remove('favorito');
    favoritos = favoritos.filter(f => f !== id);

    // Volta para a posição original
    const pos = parseInt(post.dataset.pos);
    const posts = Array.from(container.children).filter(p => p !== post);
    if(pos >= posts.length){
      container.append(post);
    } else {
      container.insertBefore(post, posts[pos]);
    }

  } else {
    // Marca como favorito e coloca no topo
    post.parentElement.prepend(post);
    btn.classList.add('favorito');
    favoritos.push(id);
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
