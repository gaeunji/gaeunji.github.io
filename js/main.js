// Site-wide scripts. Home-only helpers (e.g. toggleMoreNews) live in _layouts/home.html.

// 🦖 Easter egg: click the profile photo to reveal the Tyranno CV.
(function () {
  var photo = document.querySelector(".hero-photo");
  if (!photo) return;

  photo.style.cursor = "pointer";
  photo.addEventListener("click", function () {
    window.open("/pdf/Tyranno_CV.pdf", "_blank", "noopener");
  });
})();
