const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
/*Step 10

Below the isWorldCupWinner property, add a new key called headCoach with a value of an empty object. Inside that object, add a property with a key of coachName and a string value of Carlos Bilardo. Below that property, add another key called matches with a number value of 7.
*/
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
};
