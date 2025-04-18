function hideCanceledEventsInNode(node) {
    const titleElements = node.querySelectorAll?.('span.I0UMhf') || [];
  
    titleElements.forEach(el => {
      const text = el.textContent?.trim();
      if (text && text.startsWith("Canceled:")) {
        const eventChip = el.closest('[role="button"]');
        if (eventChip && eventChip.style.display !== "none") {
          console.log("Hiding canceled event:", text); // Optional debug log
          eventChip.style.display = "none";
        }
      }
    });
  }
  
  function observeAndFilter() {
    if (!window.__CanceledEventFilterEnabled) return;
  
    // Full page sweep at start
    hideCanceledEventsInNode(document);
  
    // Watch for dynamically added calendar entries
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            hideCanceledEventsInNode(addedNode);
          }
        }
      }
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Wait a short time to make sure injected config is set
  setTimeout(observeAndFilter, 500);
  