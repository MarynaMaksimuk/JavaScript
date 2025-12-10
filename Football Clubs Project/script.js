// Get references to HTML elements
const clubList = document.getElementById("club-list");
const searchInput = document.getElementById("search");
const clubDetailsContainer = document.getElementById("main");

// Initialize football club data and display all clubs
let clubData = footballClubs;
displayClubs(footballClubs);

// Task 1: Display football clubs in the club list
function displayClubs(clubs) {
  clubList.innerHTML = "";
  // Generate HTML for club cards and set it in the clubList element
  clubs.map((club) => {
    clubList.innerHTML += `
    <div class="club-card" onclick="handleClubClick('${club.name}')">
        <h3>${club.name}</h3>
            <img src="${club.image}"/>
            <p>League: ${club.league}</p>
            <p>City: ${club.city}</p>
            <button onclick="event.stopPropagation(); viewClubPlayers('${club.name}')">View Players</button>
    </div>
    `;
  });
}
searchInput.addEventListener("input", handleSearchInput);
// Task 2: Handle search input and filter clubs
// Attach an input event listener for the search input
function handleSearchInput() {
  // Write your code here for task4
  // Get the search term and convert it to lowercase for case-insensitive search
  const searchLower = searchInput.value.toLowerCase();
  console.log(searchLower);
  // Create a string containing club details for searching
  const filteredList = clubData.filter((club) => {
    const nameLower = club.name.toLowerCase();
    const clubNameFilter = nameLower.includes(searchLower);
    if (clubNameFilter) {
      return true;
    }

    const cityLower = club.city.toLowerCase();
    const clubCityFilter = cityLower.includes(searchLower);
    if (clubCityFilter) {
      return true;
    }

    const leagueLower = club.league.toLowerCase();
    const clubLeagueFilter = leagueLower.includes(searchLower);
    if (clubLeagueFilter) {
      return true;
    }
    return false;
  });
  // Check if the search term is found in the club data string

  // Display the filtered clubs
  console.log(filteredList);
  displayClubs(filteredList);
}

// Task 3: Handle clicking on a football club card to display club details
function handleClubClick(element) {
  // Write your code here for task1
  // Get the name of the clicked club
  const selectedClub = clubData.find((club) => {
    return club.name === element;
  });
  // Find the selected club by its name
  if (selectedClub) {
    console.log(selectedClub);
  }
  // Display details of the selected club
  displayClubDetails(selectedClub);
}

// Display football club details
function displayClubDetails(club) {
  // Write your code here for task2
  // Create a club details HTML using template strings
  // Set the club details HTML in the clubDetailsContainer
  clubDetailsContainer.innerHTML = "";
  clubDetailsContainer.innerHTML += `
    <div id='club-details'>
        <button onclick='reloadPage()'>Back</button>
        <h3>${club.name}</h3>
        <img src='${club.image}' width='260'/>
        <p><b>League:</b> ${club.league}</p>
        <p><b>City:</b> ${club.city}</p>
        <p><b>Stadium:</b> ${club.stadium}</p>
        <button onclick='viewClubPlayers("${club.name}")'>View Players</button>
        <p><b>Description: </b>${club.description}</p>
    </div>
    `;
}
const reloadPage = () => {
  window.location.reload();
};

// Task 4: Function to view club players
function viewClubPlayers(clubName) {
  // Find the selected club by its name
  const selectedClub = clubData.find((club) => club.name === clubName);
  console.log(selectedClub);

  // Write your code here for task3
  // Generate HTML for the list of players and display it
  clubDetailsContainer.innerHTML = "";
  // Iterate over selectedClub object's players property
  let html = ` <button onclick='reloadPage()'>Back</button>
        <h3>${selectedClub.name} Players</h3>`;

  selectedClub.players.forEach((player) => {
    html += `<p><b>Name: </b>${player.name}</p>
        <p><b>Position: </b>${player.position}</p>
        <p><b>Goals: </b>${player.goals}</p>
        <p><b>Assists: </b>${player.assists}</p>
        <hr>`;
  });

  // Create a string joining the information of all the players of the selected Club

  // Display the information by setting the HTML in the clubDetailsContainer

  clubDetailsContainer.innerHTML = html;
}
