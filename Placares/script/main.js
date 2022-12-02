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

function createVbox(vlink) {
    return `
  <iframe class="video-box" src="https://www.youtube.com/embed/${vlink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  `
}

function createBox() {
    return `
  <div class="placar-box">
  
`
}

document.getElementById('app').innerHTML = `
<div class="placar-box">
  <iframe class="video-box" src="https://www.youtube.com/embed/IUKID5myH7k?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <main id="cards">
    ${createCard("20/11", "Domingo", createGame("qatar", "0 x 2", "ecuador"))}
  </main>
`
    // ALTERAR O MODO COMO O VIDEO É ABERTO, TALVES CRIANDO UMA FUNÇÃO SOMENTE PARA ELE

//CRIA UMA CLASSE DE JOGO 1,2,3... QUE AI COM ALGUMA FUNÇÃO ESCOLHE SE VAI DE TRAS PRA FRENTE OU VICE E VERSA

document.getElementById('app').innerHTML = `
<div class="placar-box">
    ${createVbox("IUKID5myH7k?start=3")}
    ${createCard("20/11", "Domingo", createGame("qatar", "0 x 2", "ecuador"))}
</div>
<div class="placar-box">
    ${createCard("21/11", "Segunda", createGame("russia", "2 x 2", "croatia"))}
    ${createVbox("6NOyC3AQ-Gs")}
</div>
<div class="placar-box">
    ${createVbox("iOeM_Zysx3Q?start=2")}
    ${createCard("21/11", "Segunda", createGame("england", "6 x 2", "iran"))}
</div>
`