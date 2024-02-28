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
