document.addEventListener("DOMContentLoaded", function () {
    const saveUrlButton = document.querySelector('.save-url');
    const bookmarksList = document.querySelector('.bookmarks-list');

    saveUrlButton.addEventListener('click', function () {
        // Get current URL
        const currentUrl = window.location.href;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = currentUrl;

        // Append the list item to the bookmarks list
        bookmarksList.appendChild(listItem);
    });
});
