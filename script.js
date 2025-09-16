//your code here!

// script.js

const list = document.getElementById("infi-list");
let itemCount = 0;
let isLoading = false;

// Add `n` items to the list, numbering them sequentially
function addItems(n) {
  for (let i = 0; i < n; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Initialize with ~10 items
addItems(10);

// Helper to check if scrolled to (or very near) the bottom
function isAtBottom(container, threshold = 1) {
  return container.scrollTop + container.clientHeight >= container.scrollHeight - threshold;
}

// Scroll listener: when the user reaches the end, append 2 more items
list.addEventListener("scroll", () => {
  if (!isLoading && isAtBottom(list)) {
    isLoading = true;
    // simulate a small async load delay to avoid firing multiple times immediately
    setTimeout(() => {
      addItems(2);
      isLoading = false;
    }, 200);
  }
});
