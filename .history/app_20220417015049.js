window.addEventListener("load", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const rm = document.querySelector(".remove");
  bar.addEventListener("click", function (e) {
    nav.classList.add("active");
  });
  rm.addEventListener("click", function (e) {
    nav.classList.remove("active");
  });
  document.addEventListener("click", function (e) {
    console.log(e.target);
    if (!nav.contains(e.target) && !e.target.matches(".remove")) {
      nav.classList.remove("active");
    }
  });
});
