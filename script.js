const sections = document.querySelectorAll(".animar");

function verificarScroll() {
  const alturaTela = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const distanciaTopo = section.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", verificarScroll);

verificarScroll();
