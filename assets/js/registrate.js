function animatedForm() {
  const registrar = document.querySelectorAll(".registrar");

  registrar.forEach(registrar => {
    registrar.addEventListener("click", () => {
      const input = registrar.previousElementSibling;
      console.log(input);
    });
  });
}
