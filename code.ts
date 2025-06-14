/* ------------------------------------------------------------------
Curly Arrows Plugin by Denise Kolodzey
Created with 🫖 and 🤍
------------------------------------------------------------------ */

figma.showUI(__html__, {
  width: 498,
  height: 640,
  title: "Curly Arrows by Denise Kolodzey",
});

const arrows: Record<string, string> = {
  arrow1: `<svg width="177" height="163" viewBox="0 0 177 163" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M174 3C174 3 137.15 31.6981 121.673 29.2453C106.197 26.7925 113.321 11.3396 124.621 19.9245C135.922 28.5094 133.526 42.1986 127.569 50.8302C107.425 80.0189 61.9769 77.0755 49.2023 62.8491C41.4169 54.1789 45.2717 40.7736 64.9249 40.7736C109.751 40.7736 155.084 89.5849 144.275 123.679C133.854 156.547 93.1763 146.736 54.3613 146.736C15.5462 146.736 4 153.113 4 153.113M4 153.113C4 153.113 9.79769 144.632 12.5 138.5M4 153.113C4 153.113 14.0867 157.066 19 160.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round" />
  </svg>`,

  arrow2: `<svg width="177" height="86" viewBox="0 0 177 86" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M174 51.4705C174 51.4705 162.966 56.3842 155.406 41.4384C147.846 26.4927 133.952 33.4537 141.716 47.171C149.481 60.8884 151.32 83 129.048 83C106.776 83 116.175 47.7852 118.219 37.9579C127.328 -5.85565 98.1021 -10.5647 101.26 35.7058C102.894 59.6599 93.2909 65.8021 87.774 65.8021C78.375 65.8021 74.0841 49.0137 65.2981 43.0764C50.4273 33.0272 4 38.9816 4 38.9816M4 38.9816C4 38.9816 12.0264 30.5042 15.5 26M4 38.9816C4 38.9816 12.3918 45.8147 17.5 49.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow3: `<svg width="177" height="114" viewBox="0 0 177 114" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3C28.3045 10.1435 57.7195 6.08302 60.7402 14.9827C64.6509 26.5043 22.7835 26.0435 26.0041 38.0261C29.4727 50.9317 88.3451 40.5609 91.7957 56.4608C94.6962 69.8261 46.6452 68.8984 49.4682 88.4913C52.4896 109.461 134.813 101.165 173 98.6304M173 98.6304C173 98.6304 167 94 158 87M173 98.6304C173 98.6304 165.5 106 160 111.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow4: `<svg width="178" height="159" viewBox="0 0 178 159" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3C8.98843 10.3112 18.2383 27.8049 19.3565 39.3776C21.5016 61.5787 3 83.5122 11.5804 92.0717C18.2839 98.7587 43.489 78.6976 50.1924 92.0717C57.9685 107.586 16.5826 127.112 23.9148 143.428C31.7278 160.815 65.7445 146.371 99.7981 143.428C133.852 140.486 166.833 146.103 173 147.173M173 147.173C173 147.173 163.347 138.881 157.984 132.729M173 147.173C173 147.173 161.703 152.755 155 156.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow5: `<svg width="177" height="176" viewBox="0 0 177 176" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M174 3C156.025 8.14372 128.664 32.7487 139.076 53.1513C144.983 64.7247 153.2 55.9803 147.551 48.2648C141.901 40.5492 130.62 38.5474 120.843 46.9788C102.354 62.9244 123.155 98.1589 135.995 88.3858C148.835 78.6127 107.233 46.4644 80.7828 63.6959C54.3326 80.9274 56.6437 104.589 46.6286 123.62C36.6134 142.652 19.1511 162.455 4 173M4 173C4 173 12.5 173 22 173.5M4 173C4 173 6.18881 166.316 8.5 155" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow6: `<svg width="177" height="169" viewBox="0 0 177 169" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M174 3C165.637 20.9217 143.986 56.0609 134.841 56.0609C122.648 56.0609 127.994 35.9635 118.428 33.5217C108.861 31.08 88.1793 80.2435 95.6828 88.6956C103.186 97.1478 122.594 76.9565 130.386 89.6348C135.358 97.7249 119.834 134.713 93.8069 135.652C73.6414 136.38 73.1724 93.3913 55.5862 92.4522C35.4207 91.3753 17.9908 140.504 7.98621 165M7.98621 165C7.98621 165 6 156 3 148M7.98621 165C7.98621 165 15.0276 160.817 23 158" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow7: `<svg width="167" height="158" viewBox="0 0 167 158" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3C34.2696 15.3733 34.2642 47.0054 46.5895 47.0054C58.9147 47.0054 47.7059 17.5126 58.9147 9.65638C63.699 6.30313 76.5254 5.4905 92.2439 20.8725C107.777 36.0733 108.834 54.9875 96.3524 67.8452C83.8707 80.703 52.9857 77.2398 52.9857 93.0501C52.9857 108.86 79.4622 111.984 108.449 114.36C137.437 116.735 155.468 139.564 159.576 154M159.576 154C159.576 154 162.5 142.5 164 137M159.576 154C159.576 154 149.5 148.5 144 147" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow8: `<svg width="178" height="139" viewBox="0 0 178 139" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3.34466C14.1111 1.64679 42.0776 6.23331 45.2222 16.8537C49.2222 30.3628 25.4444 38.3355 28.7778 49.63C34.9067 70.397 79.2222 30.3442 105.222 41.6574C131.222 52.9706 130.111 79.3058 136.778 100.123C143.444 120.941 160.778 128.913 173 129.578M173 129.578C173 129.578 166.278 123.201 162.5 117M173 129.578C173 129.578 162.056 134.285 158.5 136.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow9: `<svg width="61" height="167" viewBox="0 0 61 167" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M35.4179 3C27.9522 16.0656 -1.69502 31.4873 3.63778 39.1981C9.09097 47.0831 50.9367 11.4035 57.1739 23.3481C66.3454 40.9116 -4.04023 55.6908 3.63778 70.6841C11.8683 86.7563 46.5094 46.909 55.2543 60.1888C63.9992 73.4685 20.9147 74.3253 20.4881 98.1004C20.0615 121.876 20.4881 163 20.4881 163M20.4881 163C20.4881 163 15.5 157 10.5 150.5M20.4881 163C20.4881 163 25.5 156.5 30.5 150.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow10: `<svg width="120" height="167" viewBox="0 0 120 167" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M69.6438 3C41.5604 43 39.3386 88.1018 62.3177 93.2041C85.2968 98.3064 94.77 68.4987 111.437 84.5621C128.104 100.625 106.274 138.102 59.9176 118.339C37.0501 108.59 25.0973 116.573 18.1719 125.47C11.2464 134.367 14 154 17.0485 163M17.0485 163C17.0485 163 7 155.5 2.5 152.5M17.0485 163C17.0485 163 23 150.5 25 147" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow11: `<svg width="166" height="162" viewBox="0 0 166 162" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M163 159C140.955 141.676 116.728 125.493 108.909 86.2868C104.818 65.772 86.6366 92.4412 78.2275 82.6397C67.85 70.544 92.773 53.9191 87.9998 46.853C82.7671 39.1067 64.6235 51.0965 50.9547 46.853C41.4092 43.8897 16.6364 20.1838 3 4M3 4C3 4 4 12.5 4 19M3 4C3 4 11.3636 5.81618 17.5 6.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow12: `<svg width="165" height="167" viewBox="0 0 165 167" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 164C6.78009 158.564 1.06114 150.146 5.36239 147.456C11.0322 143.911 14.7017 160.963 20.2466 156.91C26.3893 152.419 9.9369 141.17 14.8128 136.112C21.1917 129.495 35.1308 160.16 43.3997 153.365C52.1412 146.182 28.5155 124.059 35.6032 117.678C42.6909 111.297 50.9599 142.021 59.7013 132.567C64.8375 127.013 50.2511 120.84 77.6568 99.9527C105.062 79.0651 141.682 35.9055 162 4M162 4C162 4 162 15.5 162.5 21M162 4C162 4 154.533 7.19129 146.5 10.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow13: `<svg width="37" height="168" viewBox="0 0 37 168" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.1037 165C24.1037 109.924 5.85976 86.4002 3.27993 104.323C0.16312 125.977 24.0661 110.111 25.7622 78.1855C27.0516 53.9148 24.103 5 24.103 5M24.103 5C24.103 5 18 15.5 16 19M24.103 5C24.103 5 32 15.5 34.5 18.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,

  arrow14: `<svg width="169" height="114" viewBox="0 0 169 114" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5969 109C9.49254 69.7769 13.349 4.70809 46.0303 4.00663C79.4637 3.28904 68.001 61.0251 80.179 61.4062C91.404 61.7575 80.8965 36.7721 91.404 36.7721C100.479 36.7721 96.6577 61.4062 105.732 61.4062C114.807 61.4062 110.985 45.8605 119.104 45.6213C127.224 45.3822 126.254 78.3209 142.031 77.6694C165.195 76.7127 158.986 25.2922 155.164 5.44162M12.5969 109C12.5969 109 18 101 21.5 96.5M12.5969 109C12.5969 109 6 101 2.5 97.5M155.164 5.44162C155.164 5.44162 162.5 13.5 166.5 17M155.164 5.44162C155.164 5.44162 150.149 16.1517 148 19.5" stroke="#333333" stroke-width="5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>`,
};

/* ------------------------------------------------------------------
      Send arrows data to UI
------------------------------------------------------------------ */

figma.ui.onmessage = (msg) => {
  if (msg.type === "request-arrows") {
    figma.ui.postMessage({
      type: "load-arrows",
      arrows: arrows,
    });
  }

  /* ------------------------------------------------------------------
  Handle inserting arrows to Figma
  ------------------------------------------------------------------ */
  if (msg.type === "insert-arrow") {
    let svgString = arrows[msg.arrowType];
    const strokeColor = msg.strokeColor || "#000000";
    const strokeWidth = msg.strokeWidth || 1;

    // Inject stroke and stroke-width
    svgString = svgString.replace(/<path\s([^>]*?)\/?>/g, (match, attrs) => {
      const cleanAttrs = attrs
        .replace(/stroke=".*?"/, "")
        .replace(/stroke-width=".*?"/, "")
        .trim();
      return `<path ${cleanAttrs} stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`;
    });

    const wrapper = figma.createNodeFromSvg(svgString);

    // Try to find the first vector inside the wrapper
    const vector = wrapper.findOne((n) => n.type === "VECTOR") as VectorNode;

    if (vector) {
      figma.currentPage.appendChild(vector);
      wrapper.remove(); // Remove wrapper frame
      figma.viewport.scrollAndZoomIntoView([vector]);
    } else {
      figma.currentPage.appendChild(wrapper); // fallback
      figma.viewport.scrollAndZoomIntoView([wrapper]);
    }

    figma.closePlugin();
  }
};
