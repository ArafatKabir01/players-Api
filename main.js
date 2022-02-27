const allPlayers = () => {
    const srcInputValue = document.getElementById('src-input-field').value;
    const playerApiUrl = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${srcInputValue}`;
    fetch(playerApiUrl)
        .then(res => res.json())
        .then(data => playerCard(data.player));
};

const playerCard = players => {
    console.log(players)

}