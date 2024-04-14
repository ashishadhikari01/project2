
// chatgpt
const sidebarLinks = document.querySelectorAll('.sidecontainer-items-core a');
// Iterate through each sidebar link
sidebarLinks.forEach(link => {
    // Add click event listener to each link
    link.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (navigation)
        event.preventDefault()
        
        // Get the href attribute of the clicked link
        const page = this.getAttribute('href');

        // Call the function to load the page content into center-container
        loadPage(page)
    })
})

function loadPage(page) {
    // Fetch the content of the page
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Update the content of center-container with the fetched data
            document.querySelector('.center-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the page:', error);
        });
}