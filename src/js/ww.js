trailer.addEventListener('click', trailerFoo);
function trailerFoo(trailerKey) {
  NewFetchApi.fetchTrailer(curFilm.id)
    .then(e => {
      trailerKey = e.results[0].key;
      const instance = basicLightbox.create(`
  <iframe class="trailerPlayer" src="https://www.youtube.com/embed/${trailerKey}" width="1200" height="800" frameborder="0"></iframe>
`);

      instance.show();
    })
    .catch(error => {
      trailer.setAttribute('disabled', 'disabled');
      trailer.textContent = 'no trailer';
    });
}