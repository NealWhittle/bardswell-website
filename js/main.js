// The Emily Bardswell Story — shared behaviour

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Video modal (home page) ---------- */
  var videoTrigger = document.querySelector("[data-video-trigger]");
  var videoModal = document.querySelector("[data-video-modal]");
  if (videoTrigger && videoModal) {
    var video = videoModal.querySelector("video");
    var closeBtn = videoModal.querySelector("[data-video-close]");

    var openVideo = function () {
      videoModal.classList.add("is-open");
      if (video) video.play().catch(function () {});
      document.body.style.overflow = "hidden";
    };
    var closeVideo = function () {
      videoModal.classList.remove("is-open");
      if (video) { video.pause(); video.currentTime = 0; }
      document.body.style.overflow = "";
    };

    videoTrigger.addEventListener("click", openVideo);
    if (closeBtn) closeBtn.addEventListener("click", closeVideo);
    videoModal.addEventListener("click", function (e) {
      if (e.target === videoModal) closeVideo();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeVideo();
    });
  }

  /* ---------- Lightbox (collection page) ---------- */
  var galleryItems = document.querySelectorAll("[data-gallery-item]");
  var lightbox = document.querySelector("[data-lightbox]");
  if (galleryItems.length && lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector("[data-lightbox-cap]");
    var lbClose = lightbox.querySelector("[data-lightbox-close]");

    var openLightbox = function (src, caption) {
      lbImg.src = src;
      lbImg.alt = caption || "";
      if (lbCap) lbCap.textContent = caption || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };
    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        openLightbox(img.getAttribute("src"), img.getAttribute("data-full-caption") || img.alt);
      });
    });
    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------- Contact form (Web3Forms) ---------- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector(".btn-submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";

      var formData = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          if (data.success) {
            status.textContent = "Thank you — your message has been sent.";
            status.classList.add("success");
            form.reset();
          } else {
            status.textContent = "Something went wrong. Please try again, or email neal@bardswell.com directly.";
            status.classList.add("error");
          }
        })
        .catch(function () {
          status.textContent = "Something went wrong. Please try again, or email neal@bardswell.com directly.";
          status.classList.add("error");
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send message";
        });
    });
  }
});
