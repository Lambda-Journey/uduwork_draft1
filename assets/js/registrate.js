function animatedForm() {
  const registrar = document.quarySelectorAll(".registrar");

  registrar.forEach(registrar => {
    registrar.addEventListener("click", () => {
      const input = registrar.previousElementSibling;
      console.log(input);
    });
  });
}
