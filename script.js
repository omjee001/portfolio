// portfolio functionality

// Function to show portfolio items
function showPortfolioItems() {
    const portfolioItems = [
        { title: 'Project 1', description: 'Description of Project 1', link: 'http://example.com/project1' },
        { title: 'Project 2', description: 'Description of Project 2', link: 'http://example.com/project2' },
        { title: 'Project 3', description: 'Description of Project 3', link: 'http://example.com/project3' }
    ];

    const portfolioContainer = document.getElementById('portfolio');
    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><a href='${item.link}' target='_blank'>View Project</a>`;
        portfolioContainer.appendChild(itemElement);
    });
}

// Call the function on page load
window.onload = showPortfolioItems;