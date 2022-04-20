window.addEventListener("load", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const rm = document.querySelector(".remove");
  bar.addEventListener("click", function (e) {
    nav.classList.add("active");
  });
});
