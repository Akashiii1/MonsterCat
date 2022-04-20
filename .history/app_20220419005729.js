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
      const tt = ` <div class="toolTip">
      ${dataName}
      
    </div>`;
      const cords = e.target.getBoundingClientRect();
      const { top, left, width, height } = cords;
      document.body.insertAdjacentHTML("beforeend", tt);

      console.log(top, left);
      tt.style = `Top=${top - height}px`;
      tt.style = `Left=${left - width / 2}px`;

      // template.style.left = `${left}px`;
      // template.style.top = `${top}px`;
    })
  );
  [...tooltip].forEach((item) =>
    item.addEventListener("mouseleave", function (e) {})
  );
  document.addEventListener("click", function (e) {});
});
