window.addEventListener("load", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const rm = document.querySelector(".remove");
  const hasMenu = document.querySelectorAll(".has-menu");
  const tooltip = document.querySelectorAll(".imgCircle");
  [...hasMenu].forEach((item) =>
    item.addEventListener("click", function (e) {
      const right = e.target.querySelector("ion-icon");
      if (right) {
        const sub = e.target.nextElementSibling;
        sub.classList.toggle("active");
      }
    })
  );
  bar.addEventListener("click", function (e) {
    nav.classList.add("active");
  });
  rm.addEventListener("click", function (e) {
    nav.classList.remove("active");
  });

  // tooltip
  [...tooltip].forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      const dataName = e.target.dataset.name;
      console.log(dataName);
      const template = ` <div class="toolTip">
      ${dataName}
      
    </div>`;
      const cords = e.target.getBoundingClientRect();
      const { top, left, width } = cords;
      document.body.insertAdjacentHTML("beforeend", template);

      console.log(top, left);

      template.style.left = `${left - width / 2}px`;
      template.style.top = `${top}px`;

      // template.style.left = `${left}px`;
    })
  );
  document.addEventListener("click", function (e) {});
});
