// Inject floating Home/Top nav bar at bottom-right of every page
(function () {
  "use strict";

  function createFloatingNav() {
    var nav = document.createElement("nav");
    nav.className = "md-floating-nav";
    nav.setAttribute("aria-label", "Floating page navigation");

    var topLink = document.createElement("a");
    topLink.href = "#";
    topLink.title = "Back to top / Lên đầu trang";
    topLink.innerHTML = "&#9650;";
    topLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var homeLink = document.createElement("a");
    homeLink.href = document.querySelector('link[rel="canonical"]')
      ? new URL(document.querySelector('link[rel="canonical"]').href).pathname.replace(/\/[^/]*$/, "/")
      : "/taichi/";
    homeLink.title = "Home / Trang chủ";
    homeLink.innerHTML = "&#8962;";

    nav.appendChild(homeLink);
    nav.appendChild(topLink);
    document.body.appendChild(nav);

    var visible = false;
    function toggle() {
      var threshold = 300;
      var nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      if (window.scrollY > threshold && !nearBottom) {
        if (!visible) {
          nav.classList.add("is-visible");
          visible = true;
        }
      } else {
        if (visible) {
          nav.classList.remove("is-visible");
          visible = false;
        }
      }
    }
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createFloatingNav);
  } else {
    createFloatingNav();
  }
})();
