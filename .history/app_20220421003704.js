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
  <h4 class="item-number">${item + 1}</h4>
  <div class="item-play">
      <i class="fa fa-play "></i>
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
  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  const itemMusics = document.querySelectorAll(".item-music");
  [...itemMusics].forEach((item) => {
    const play = item.querySelector(".item-play i");
    const song = item.querySelector("#song");

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
    const timer = setInterval(function () {
      const { duration } = song;
      const itemDuration = item.querySelector(".item-duration");

      if (!duration) {
        itemDuration.textContent = "0:00";
      } else {
        itemDuration.textContent = formatTimer(duration);
      }
    }, 1000);
  });
});