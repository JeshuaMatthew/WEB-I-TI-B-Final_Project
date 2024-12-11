
document.addEventListener('DOMContentLoaded', () => {
    const postIdElement = document.getElementById('post-id');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');

    fetch('https://jsonplaceholder.typicode.com/posts/9')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            postIdElement.textContent = `Post ID: ${data.id}`;
            postTitleElement.textContent = data.title;
            postBodyElement.textContent = data.body;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            postTitleElement.textContent = 'Error fetching post';
        });
});