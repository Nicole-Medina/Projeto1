const main = document.getElementById("main");
const bloco = document.querySelector('.bloco');
const logarButton = document.getElementById("lgr");
const cadastrarButton = document.getElementById("cdstr");




cadastrarButton.addEventListener('click', function() {
    main.classList.add('animacao-deslizar_esq')
    console.log("esquerda")
});

logarButton.addEventListener('click', function() {
    main.classList.add('animacao-deslizar_dir')
    console.log("direita")
});



/*





const main = document.getElementById("main");
const entrarButton = document.getElementById("login");
const particButton = document.getElementById("registro");

particButton.addEventListener('click', function() {
    main.classList.add("container.right-painel-active");
    console.log("Participei")
});

entrarButton.addEventListener('click', function() {
    main.classList.remove("container.right-painel-active");
    console.log("Loguei")
});
*/