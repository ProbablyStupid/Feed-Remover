function removeAllLinks() {
    elements = document.getElementsByTagName('a');
    Array.from(elements).forEach(link => link.remove());
}

// TODO: get the removal settings here
var remove;

function eradicateBasedOnUrl(removal_settings) {
    const url = window.location.href;

    if (url.includes("youtube") && removal_settings['youtube']) {
      yt_eradicate();
      // Is there not a better way to write this code?
      // I mean, it isn't too bad. 
      // But I dislike the nesting aspect.
      if (url.includes("shorts") && removal_settings['youtube-shorts']) {
        yts_eradicate();
      }
    }

    if (url.includes("facebook") && removal_settings['facebook']) {
      fb_eradicate();
    }

    if (url.includes("threads") && removal_settings['threads']) {
      mt_eradicate();
    }

    // TODO: twitter/X implementation
    // if (url.includes("x.com") || url.includes("twitter")) {
    //   tw_eradicate();
    // }

    // TODO: Instagram implementation
    // if (url.includes("instagram")) {
    //   is_eradicate();
    // }

    if (url.includes("reddit") && removal_settings['reddit']) {
      rd_eradicate();
    }
}

chrome.storage.local.get(['removal_settings'], function e(result) {
  remove = result;
  console.log("results below!", result);
  eradicateBasedOnUrl(remove['removal_settings']);
});

// TODO: make this only execute AFTER the removal settings have been loaded
// window.addEventListener('load', () => {
//     // TODO: also evaluate whether we actually need this listener.
//     const url = window.location.href;

//     if (url.includes("youtube")) {
//       yt_eradicate();
//       // Is there not a better way to write this code?
//       // I mean, it isn't too bad. 
//       // But I dislike the nesting aspect.
//       if (url.includes("shorts")) {
//         yts_eradicate();
//       }
//     }

//     if (url.includes("facebook")) {
//       fb_eradicate();
//     }

//     if (url.includes("threads")) {
//       mt_eradicate();
//     }

//     // TODO: twitter/X implementation
//     // if (url.includes("x.com") || url.includes("twitter")) {
//     //   tw_eradicate();
//     // }

//     // TODO: Instagram implementation
//     // if (url.includes("instagram")) {
//     //   is_eradicate();
//     // }

//     if (url.includes("reddit")) {
//       rd_eradicate();
//     }


// });

