const checkbox = document.getElementById("toggle");

chrome.storage.sync.get("enabled", (data) => {
  // Default to true if not set yet
  const isEnabled = data.enabled !== undefined ? data.enabled : true;
  checkbox.checked = isEnabled;
  chrome.storage.sync.set({ enabled: isEnabled }); // Save default if not already set
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
});