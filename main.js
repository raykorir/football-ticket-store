document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const teamList = document.getElementById('teamList');
  const cartItems = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Function to fetch team data from the API
  const fetchTeams = async () => {
      try {
          // Fetch team data from the API
          const response = await fetch('https://api.example.com/teams');
          const data = await response.json();

          // Display team listings
          displayTeams(data);
      } catch (error) {
          console.error('Error fetching team data:', error);
      }
  };

  // Function to display team listings
  const displayTeams = (teams) => {
      // Clear previous listings
      teamList.innerHTML = '';

      // Loop through each team and create HTML elements
      teams.forEach(team => {
          const teamCard = document.createElement('div');
          teamCard.classList.add('team');
          teamCard.innerHTML = `
              <img src="${team.logo}" alt="${team.displayName} Logo">
              <h2>${team.displayName}</h2>
              <p>${team.abbreviation}</p>
              <p>${team.league}</p>
          `;
          teamList.appendChild(teamCard);
      });
  };

  // Event listener for search input
  searchInput.addEventListener('input', () => {
      // Implement search functionality here
  });

  // Event listener for adding teams to cart (if needed)
  // Replace this with appropriate functionality based on project requirements

  // Event listener for checkout button (if needed)
  // Replace this with appropriate functionality based on project requirements

  // Fetch teams when the page loads
  fetchTeams();
});
