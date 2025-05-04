function eradicate_by_tag_name (tag_name) {
    elements = document.getElementsByTagName(tag_name);
    Array.from(elements).forEach(link => link.remove());

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType !== 1) continue;
      
            if (node.tagName === tag_name.toUpperCase()) {
              node.remove();
            } else {
              const nested = node.getElementsByTagName?.(tag_name);
              if (nested) {
                Array.from(nested).forEach(el => el.remove());
              }
            }
          }
        }
      });
      
      // Start observing the whole document body
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
}

function eradicate_by_attribute (attribute) {
    const tag = document.querySelector(attribute);
    if (tag) {
      tag.remove();
    }


    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType !== 1) continue;
      
            if (node.matches?.(attribute)) {
              node.remove();
            } else {
              const nested = node.querySelector?.(attribute);
              if (nested) {
                nested.remove();
              }
            }
          }
        }
      });
      
      // Start observing the whole document body
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
}