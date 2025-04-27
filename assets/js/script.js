const buttons = document.querySelectorAll('.apply-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const vacancy = this.getAttribute('data-vacancy');
    alert(`Siz ${vacancy} vakansiyasına baxırsınız.`);
  });
});