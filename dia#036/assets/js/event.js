document.querySelectorAll("input").forEach(input => {
  input.addEventListener("change", (e) => {
    document.querySelector(".active").classList.remove("active")
    if (e.target.checked){
      document.querySelector(e.target.dataset.target).classList.add("active")
    }
  })
});