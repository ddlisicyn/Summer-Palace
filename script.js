"use strict";

import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

document.addEventListener("DOMContentLoaded", function(event) {

  tns({
    container: '.main__scroller-gallery',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
  });

//Перемещение tns-nav
    const tns_nav = document.querySelector('.tns-nav'),
          tns_navButtons = tns_nav.querySelectorAll('button'),
          firstButton = document.querySelector('[data-controls="prev"]');

    firstButton.after(tns_nav);
    console.log(tns_navButtons);

    for (let i = 0; i < 2; i ++) {
      tns_navButtons[i].style.cssText = `
      width: 72px;
      height: 0;
      border: 1px solid gray;
      padding: 0;
      `;
    }
});
