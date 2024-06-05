document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Button ${button.textContent} clicked`);
    });
});
