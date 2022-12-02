function createGame(player1, hour, player2) {
    return `
    <li>
      <img src="./bandeiras/icon=${player1}.svg" alt="Bandeira do ${player1}" title = "Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./bandeiras/icon=${player2}.svg" alt="Bandeira da ${player2}" title = "Bandeira do ${player2}">
    </li>
  `
}

function createCard(date, day, games) {
    return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
          ${games}
      </ul>
    </div>
  `
}
document.getElementById('app').innerHTML = `
<main id="cards">
    ${createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador"))}
    ${createCard(
      "21/11",
      "Segunda",
      createGame("senegal", "13:00", "netherlands") +
        createGame("england", "10:00", "iran") +
        createGame("united states", "16:00", "wales"))}
</main>
`