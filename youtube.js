

function yt_eradicate () {
  const news_feed_tag_name = "ytd-rich-grid-renderer"; 
    console.log("eradicating youtube feed...");

    eradicate_by_tag_name(news_feed_tag_name);

    // elements = document.getElementsByTagName(news_feed_tag_name);
    // Array.from(elements).forEach(link => link.remove());

    // // const observer = new MutationObserver(mutations => {
    // //     mutations.forEach(mutation => {
    // //       mutation.addedNodes.forEach(node => {
    // //         if (node.nodeType === 1) { // Element node
    // //           if (node.tagName === news_feed_tag_name) {
    // //             node.remove();
    // //           } else {
    // //             // Check for <a> elements within the newly added subtree
    // //             const anchors = node.getElementsByTagName?.(news_feed_tag_name) || [];
    // //             Array.from(anchors).forEach(link => link.remove());
    // //           }
    // //         }
    // //       });
    // //     });
    // //   });
    
    // //   observer.observe(document.body, {
    // //     childList: true,
    // //     subtree: true
    // //   });

    // const observer = new MutationObserver((mutations) => {
    //     for (const mutation of mutations) {
    //       for (const node of mutation.addedNodes) {
    //         if (node.nodeType !== 1) continue; // Skip non-element nodes
      
    //         // If it's the target node itself
    //         if (node.tagName === news_feed_tag_name.toUpperCase()) {
    //           node.remove();
    //         } else {
    //           // Or if it contains one
    //           const nested = node.getElementsByTagName?.(news_feed_tag_name);
    //           if (nested) {
    //             Array.from(nested).forEach(el => el.remove());
    //           }
    //         }
    //       }
    //     }
    //   });
      
    //   // Start observing the whole document body
    //   observer.observe(document.body, {
    //     childList: true,
    //     subtree: true
    //   });
}