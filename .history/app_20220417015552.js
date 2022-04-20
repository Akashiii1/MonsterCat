window.addEventListener("load", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const rm = document.querySelector(".remove");
  const hasMenu = document.querySelectorAll(".has-menu");
  [...hasMenu].forEach((item) =>
    item.addEventListener("click", function (e) {
      const sub = e.target.nextElementSibling;
      sub.classList.add("acive");
    })
  );
  bar.addEventListener("click", function (e) {
    nav.classList.add("active");
  });
  rm.addEventListener("click", function (e) {
    nav.classList.remove("active");
  });
  document.addEventListener("click", function (e) {});
});
