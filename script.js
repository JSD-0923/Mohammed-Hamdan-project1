document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        console.log("Test")
        body.classList.toggle('dark-mode');
    });

    document.getElementById('favoriteButton').addEventListener('click', function() {
        var footer = document.getElementById('favoriteFooter');
        footer.classList.toggle('hidden');
      });
      
    //   function addToFavorites(title, content) {
    //     var card = document.createElement('div');
    //     card.classList.add('card');
    //     card.innerHTML = '<h3>' + title + '</h3>' + '<p>' + content + '</p>';
      
    //     var favoriteCards = document.getElementById('favoriteCards');
    //     favoriteCards.appendChild(card);
    //   }

    // fetch('data.json')
    // .then(response => response.json())
    // .then(data => {
    //     document.getElementById('name').textContent = data.name;
    //     document.getElementById('title').textContent = data.title;
    // })
    // .catch(error => console.error('Error fetching JSON:', error));
    
});