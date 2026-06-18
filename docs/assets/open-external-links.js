// Open all external links in a new tab with rel="noopener noreferrer"
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="http"], a[href^="mailto:"]').forEach(function (link) {
      if (link.hostname !== location.hostname && !link.hasAttribute("target")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
})();
