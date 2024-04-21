
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const openContents = document.querySelectorAll('.panel.active');
  
        openContents.forEach(item => {
          if (item !== content) {
            item.classList.remove('active');
          }
        });
  
        content.classList.toggle('active');
      });
    });
  });
  
