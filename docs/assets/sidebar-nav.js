// Inject persistent Previous/Next/Home bars at top and bottom of sidebar
(function () {
  "use strict";

  function buildSidebarNav() {
    var sidebar = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
    if (!sidebar) return;

    var canonical = document.querySelector('link[rel="canonical"]');
    var basePath = canonical
      ? new URL(canonical.href).pathname.replace(/\/[^/]*$/, "/")
      : "/taichi/";

    var links = [
      { href: basePath, label: "Home / Trang chủ" },
      { href: "mailto:henry.phamduc@gmail.com", label: "Contact / Liên hệ" }
    ];

    var html = '<div class="md-sidebar-nav">' +
      links.map(function (l) {
        return '<a href="' + l.href + '">' + l.label + "</a>";
      }).join("") +
      "</div>";

    var top = document.createElement("div");
    top.innerHTML = html;
    sidebar.insertBefore(top.firstElementChild, sidebar.firstChild);

    var bottom = document.createElement("div");
    bottom.innerHTML = html;
    sidebar.appendChild(bottom.firstElementChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildSidebarNav);
  } else {
    buildSidebarNav();
  }
})();
