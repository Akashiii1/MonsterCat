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
      const tooltipDiv = document.createElement("div");
      tooltipDiv.className = "toolTip";
      tooltipDiv.textContent = `Stream on ${dataStream}`;
      document.body.appendChild(tooltipDiv);

      const cords = e.target.getBoundingClientRect();
      const { top, left, width, height } = cords;

      const tooltipHeight = tooltipDiv.offsetHeight;
      const triangleHeight = 10;
      const toolTipWidth = tooltipDiv.offsetWidth;
      tooltipDiv.style.left = `${left - width - toolTipWidth / 6}px`;

      tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
    })
  );
  [...streams].forEach((item) =>
    item.addEventListener("mouseleave", function (e) {
      const toolTip = document.querySelector(".toolTip");
      if (toolTip) {
        toolTip.parentNode.removeChild(toolTip);
      }
    })
  );
  const Music = [
    {
      title: "A Hero Within",
      singer: "ShawnBarnes",
      name: "m1.mp3",
    },
    {
      title: "A shes To Ashes",
      singer: "DwayneFord",
      name: "m2.mp3",
    },
    {
      title: "Closer",
      singer: "Alanlenon",
      name: "m3.mp3",
    },
    {
      title: "Eternal",
      singer: "VGdragon",
      name: "m4.mp3",
    },
    {
      title: "Origin",
      singer: "Dat",
      name: "m5.mp3",
    },
    {
      title: "Reach",
      singer: "ShawnBarnes",
      name: "m6.mp3",
    },
    {
      title: "Redemption",
      singer: "ShawnBarnes",
      name: "m7.mp3",
    },
    {
      title: "Relativity",
      singer: "ShawnBarnes",
      name: "m8.mp3",
    },
    {
      title: "Revolution",
      singer: "ShawnBarnes",
      name: "m9.mp3",
    },
    {
      title: "Shape",
      singer: "ShawnBarnes",
      name: "m10.mp3",
    },
    {
      title: "Two Steps ",
      singer: "ShawnBarnes",
      name: "m11.mp3",
    },
    {
      title: "Warrior",
      singer: "ShawnBarnes",
      name: "m12.mp3",
    },
  ];

  const listMusic = document.querySelector(".list-music");
  for (var item = 0; item < Music.length; item++) {
    const itemMusic = `<div class="item-music">
  <h4 class="item-number">${item}</h4>
  <div class="item-play">
  <i class="fa fa-play player-play"></i>
  </div>
  <audio src="./music/${Music[item].name}" id="song"></audio>
  <div class="item-content">
    <div class="item-title">${Music[item].title}<br>
      <span class="item-singer">${Music[item].singer}</span>
    </div>
    <h3 class="item-duration">3:35</h3>
  </div>
  <div class="item-share">
    <ion-icon name="share-social-outline"></ion-icon>
  </div>
</div>`;
    listMusic.insertAdjacentHTML("beforeend", itemMusic);
  }
  let playing = true;
  const itemMusics = document.querySelectorAll(".item-music");
  [...itemMusics].forEach((item) => {
    const play = item.querySelector(".item-play");
    const song = item.querySelector("#song");
    const duration = item.querySelector(".item-duration");
    play.addEventListener("click", function (e) {
      if (playing) {
        song.play();
        e.target.classList.add("fa-pause");
        playing = false;
      } else {
        song.pause();
        e.target.classList.remove("fa-pause");

        playing = true;
      }
    });
  });
});
