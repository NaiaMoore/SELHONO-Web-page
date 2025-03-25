document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab__link');
  const contents = document.querySelectorAll('.project-page');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = this.dataset.tab;
      buttons.forEach(btn => btn.classList.remove('tab__link--active'));
      contents.forEach(content => content.classList.remove('project-page-active'));

      this.classList.add('tab__link--active');

      setTimeout(() => {
        document.getElementById(tabId).classList.add('project-page-active');

      }, 20);
    });
  });
});