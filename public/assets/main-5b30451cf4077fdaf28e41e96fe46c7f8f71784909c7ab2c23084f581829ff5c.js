"use strict";


{
  const images = [
    '/assets/f04-bb26defe806f89600f8209918c6f610f681c5dae51bf7fcf4455c2485664bdcd.jpg',
    '/assets/f05-c1a51db404e23c53dab05406b120c62602b1a8933977b675422e8248429eb718.jpg',
    '/assets/f06-4021009eaef68ac33aec22900a96978eca87baf10a5cc94885c15e0dde9f4549.jpg',
    '/assets/f07-0a872df224ecbb95b33d106ab48e1f7901109164dba3802737812ba52ad42026.jpg',
    '/assets/f08-01d34b3f1d50fad7bb78d92521449b5ca7282b4bb3f884003405253faecf3e7e.jpg',
    '/assets/f09-f362ff30dff33fa94d3937be8d66b4a921c57657372cd0e642fa42a8a1b939c9.jpg',
    '/assets/f10-5dff8e38bfdb3dc99cc36016fc49517d0b9bd85daa171f5ecd037106412a4be7.jpg',
    '/assets/f11-8524bb51db1d632c13ba072b8baa7870d9bf2c8141954528a3ec15e3185e3430.jpg',
    '/assets/f12-6543bfeae8937bb93e45fbf183065de202766c0287c6eaf858a58f145b107b8a.jpg',
    '/assets/f13-e719d1cf595073d25cefc1a2e96c97a1c345fbfb5956308c51409deb307a899c.jpg',
    '/assets/f14-91563b6615d761e1fcb9b05289ee57d017ee746c722518b5454e4c181860c1a2.jpg',
    '/assets/f15-d002515310b0c45d90ca611fdf36d919e10a639a355d9aefbe8cf314e37bdca3.jpg',
    '/assets/f16-6080deacfa363713c7725b2c299e2cafb153b7311cb99148f40d71f5714cdf15.jpg',
    '/assets/f17-73642a36b86c4772f0be3f54a4b24172d60cab5b42df100cf61b29d90d5808d0.jpg',
    '/assets/f18-071a3578d8717efdb2ff4976c79c5e198629860800b668378fa7b02690c80349.jpg',
    '/assets/f19-79233f9c1d6df8d111ba249327ba04f2190a5288f862b99a259394282d1930b1.jpg',
    '/assets/f20-f01dc817f1336280d85f170e1d604550213bf6ba8e7dbbfbdb32b2c5c38e636c.jpg',
    '/assets/f21-dafa3f6ed1ac93976010410e52372553549859ed88178f18fe894493cb515376.jpg',
    '/assets/f22-fb0721b0042e2ce6db7df450b41490925376b6d86ee791b02f9c4c37e4609ae5.jpg',
    '/assets/f23-b73a82039c4ccd5638c5d4161bd8bfa23caf3188af4bfc6859edee7898d8db9c.jpg',
    '/assets/f24-dfc18cd6f5b26f41849848b30e33c356c9c8c5db39688e643886a710cf774ab0.jpg',
    '/assets/f25-a9294edf6e5c2159418c2e2c58a4ee5dc2739bedcdd3515f02409c0a21e4e6d4.jpg',
    '/assets/f01-9dcf1d6fac8f32adfca6ad88b20ffc7f93b3262c67e62d3c97c2c2ed00454cd3.jpg',
    '/assets/f02-7d6263415356aaed11132678da8a8ed2841a368643937971dc963ace39265bce.jpg',
    '/assets/f03-6f3e73f6070d75c19750118a8d59421027ed9bd500e51266bae2d6ed68923d8e.jpg',
  ];

  let currentNum = 0;

  function setMainImage(image) {
    document.querySelector("main img").src = image;
  }

  setMainImage(images[currentNum]);

  function removeCurrentClass() {
    document.querySelectorAll(".jpgs li")[currentNum].classList.remove("current");
  }

  function addCurrentClass() {
    document.querySelectorAll(".jpgs li")[currentNum].classList.add("current");
  }

  //document.querySelector("main img").src = images[currentNum];

  const jpgs = document.querySelector(".jpgs");
  images.forEach((image, index) => {
    const li = document.createElement("li");
    if (index === currentNum) {
      li.classList.add("current");
    }

    li.addEventListener("click", () => {
      setMainImage(image);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
    });

    const img = document.createElement("img");
    img.src = image;
    li.appendChild(img);
    jpgs.appendChild(li);
  });

  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    removeCurrentClass();
    currentNum++;
    if(currentNum === images.length) {
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    removeCurrentClass();
    currentNum--;
    if(currentNum < 0) {
      currentNum = images.length - 1;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1600);
  }

  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  play.addEventListener("click", () => {
    play.classList.add("hidden");
    pause.classList.remove("hidden");
    playSlideshow();
  });

  pause.addEventListener("click", () => {
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    clearTimeout(timeoutId);
  });
}
;
