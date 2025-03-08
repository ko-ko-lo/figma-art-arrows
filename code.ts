figma.showUI(__html__, {
  width: 500,
  height: 500,
  title: "Artsy Arrow Plugin from Min & Denise",
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "insert-arrow") {
    const arrows: Record<string, string> = {
      arrow1: `<svg width="82" height="102" viewBox="0 0 253 317" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 289C28.167 305.333 79.3 329.1 98.5 293.5C117.7 257.9 89.833 208.667 73.5 188.5C58.167 170.167 47.7 133.5 128.5 133.5C229.5 133.5 231.5 81 231.5 16M210.5 33L231.5 8L248.5 33" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
    </svg>
    `,
      arrow2: `<svg width="60" height="86" viewBox="0 0 183 269" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M177.5 5C186.457 57.872 103.702 36.38 99 94C91.102 190.768 114.81 319.74 6 237M6 237H37M6 237L14 264.5" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
  </svg>
  `,
      arrow3: `<svg width="103" height="59" viewBox="0 0 323 177" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 172C33.5 142.667 112.6 92.5 201 126.5C289.4 160.5 303.83 61 300 7M300 7L280.5 27.5M300 7L318 27.5" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
  </svg>
  `,
      arrow4: `<svg width="72" height="98" viewBox="0 0 216 289" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M211.5 6.66907C167 0.00236738 85.6 9.76907 116 102.169C146.4 194.569 56 255.999 7 275.169M7 275.169L24 243.169M7 275.169L48.5 283.669" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
  </svg>
  `,
      arrow5: `<svg width="70" height="79" viewBox="0 0 210 236" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 231.436C28.029 170.967 90.615 62.496 163.94 98.306C214.002 122.755 175.737 176.626 122.002 147.755C68.267 118.884 84.046 15.645 202.986 25.635M202.986 25.635L187.019 43.733M202.986 25.635L178.314 5" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
  </svg>
  `,
      arrow6: `<svg width="102" height="68" viewBox="0 0 313 204" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5C9.5 39.833 44.3 105.2 147.5 88C250.7 70.8 291.17 153.167 298.5 196.5M298.5 196.5L275 178.5M298.5 196.5L308 170.5" stroke="#9C27B0" stroke-width="9" stroke-linecap="round"/>
  </svg>`,
    };

    const svgString = arrows[msg.arrowType]; // Get the selected SVG

    if (!svgString) {
      figma.notify("Arrow not found:", msg.arrowType);
      return;
    }

    const node = figma.createNodeFromSvg(svgString); // Convert to Figma vector
    figma.currentPage.appendChild(node); // Insert into Figma

    figma.closePlugin();
  }
};
