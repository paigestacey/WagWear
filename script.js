
/* accordion*/
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;

            // Toggle active class on the panel to show/hide it
            panel.classList.toggle('active');

            // Close other panels
            const otherPanels = document.querySelectorAll('.panel');
            otherPanels.forEach(otherPanel => {
                if (otherPanel !== panel && otherPanel.classList.contains('active')) {
                    otherPanel.classList.remove('active');
                }
            });
        });
    });
});


