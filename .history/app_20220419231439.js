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

  // tooltip on actor
  [...tooltip].forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      const dataName = e.target.dataset.name;
      console.log(dataName);
      const tooltipDiv = document.createElement("div");
      tooltipDiv.className = "toolTip";
      tooltipDiv.textContent = dataName;
      document.body.appendChild(tooltipDiv);
      //   const tt = ` <div class="toolTip">
      //   ${dataName}

      // </div>`;
      const cords = e.target.getBoundingClientRect();
      const { top, left, width, height } = cords;

      const tooltipHeight = tooltipDiv.offsetHeight;
      const triangleHeight = 10;
      const toolTipWidth = tooltipDiv.offsetWidth;
      tooltipDiv.style.left = `${left}px`;

      tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
    })
  );
  [...tooltip].forEach((item) =>
    item.addEventListener("mouseleave", function (e) {
      const toolTip = document.querySelector(".toolTip");
      if (toolTip) {
        toolTip.parentNode.removeChild(toolTip);
      }
    })
  );
  //tooltip on stream
  const streams = document.querySelectorAll(".list-stream li ");
  [...streams].forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      const a = e.target.querySelector("a");
      const dataStream = a.dataset.stream;
      const toolTipOnStre = `<div class="toolTip">
       Stream on ${dataStream}</div>`;
    })
  );
  document.addEventListener("click", function (e) {});
});
