const bloco = document.getElementById('bloco');
const Button = document.getElementById("buttonAnimation");

Button.addEventListener('click', function() {
    bloco.classList.add('deslizar')
    console.log("esquerda")
});
