class ScrollTool {
  /**
   * Add our own function for scrolling to top of the iframe when embedded in journey.do
   */
  static scrollToTop() {
    const $anchorTarget = document.querySelector(".h5p-interactive-book-scroll-top-anchor");
    if (H5P.communicator) {
      const elRect = $anchorTarget.getBoundingClientRect();
      const elScrollMarginTop =
        parseInt(getComputedStyle($anchorTarget).scrollMarginTop) || 0;
      H5P.communicator.send("scrollTo", {
        top: elRect.top + elScrollMarginTop,
        behavior: "smooth",
      });
    } else {
      $anchorTarget.get(0).scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default ScrollTool;
