function removeAllLinks() {
    elements = document.getElementsByTagName('a');
    Array.from(elements).forEach(link => link.remove());
}

window.addEventListener('load', () => {
    const url = window.location.href;

    if (url.includes("youtube")) {
      yt_eradicate();
      if (url.includes("shorts")) {
        yts_eradicate();
      }
    }

    if (url.includes("facebook")) {
      fb_eradicate();
    }

    if (url.includes("threads")) {
      mt_eradicate();
    }

    // if (url.includes("x.com") || url.includes("twitter")) {
    //   tw_eradicate();
    // }

    if (url.includes("reddit")) {
      rd_eradicate();
    }


});