
const strongs = document.querySelectorAll('strong');

for (let i = 0; i < strongs.length; i++) {
  strongs[i].addEventListener('click', function() {
    this.style.display = 'none';
  });
}
