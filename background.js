chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
      changeInfo.status === "complete" &&
      tab.url?.includes("calendar.google.com")
    ) {
      chrome.storage.sync.get("enabled", (data) => {
        const enabled = data.enabled !== undefined ? data.enabled : true;
        chrome.storage.sync.set({ enabled }); // Ensure it's saved
        chrome.scripting.executeScript({
          target: { tabId },
          func: (enabled) => {
            window.__CanceledEventFilterEnabled = enabled;
          },
          args: [enabled],
        });
      });
    }
  });