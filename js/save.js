function saveGame() {
    localStorage.setItem('player', JSON.stringify(player));
    console.log("Saved Game")
    alert("Game Saved")
}
function loadGame() {
    var player1 = JSON.parse(localStorage.getItem("player"));
    player.money = player1.money
    player.timermax = player1.timermax
    player.timer = player1.timer
    player.intrestrate = player1.intrestrate
    player.upintrest = player1.upintrest
    player.uptimer = player1.uptimer
    player.money = player1.money
    player.deposit = player1.deposit
    player.olddeposit = player1.olddeposit
    player.gems = player1.gems
    player.infpoints = player1.infpoints

    player.marketing[0].cost = player1.marketing[0].cost
    player.marketing[0].multincrease = player1.marketing[0].multincrease
    player.marketing[0].mult = player1.marketing[0].mult
    player.marketing[0].amount = player1.marketing[0].amount
    player.marketing[0].bought = player1.marketing[0].bought

    player.marketing[1].cost = player1.marketing[1].cost
    player.marketing[1].multincrease = player1.marketing[1].multincrease
    player.marketing[1].mult = player1.marketing[1].mult
    player.marketing[1].amount = player1.marketing[1].amount
    player.marketing[1].bought = player1.marketing[1].bought

    player.marketing[2].cost = player1.marketing[2].cost
    player.marketing[2].multincrease = player1.marketing[2].multincrease
    player.marketing[2].mult = player1.marketing[2].mult
    player.marketing[2].amount = player1.marketing[2].amount
    player.marketing[2].bought = player1.marketing[2].bought

    player.artists[0].cost = player1.artists[0].cost
    player.artists[0].multincrease = player1.artists[0].multincrease
    player.artists[0].mult = player1.artists[0].mult
    player.artists[0].amount = player1.artists[0].amount
    player.artists[0].bought = player1.artists[0].bought

    player.artists[1].cost = player1.artists[1].cost
    player.artists[1].multincrease = player1.artists[1].multincrease
    player.artists[1].mult = player1.artists[1].mult
    player.artists[1].amount = player1.artists[1].amount
    player.artists[1].bought = player1.artists[1].bought

    player.artists[2].cost = player1.artists[2].cost
    player.artists[2].multincrease = player1.artists[2].multincrease
    player.artists[2].mult = player1.artists[2].mult
    player.artists[2].amount = player1.artists[2].amount
    player.artists[2].bought = player1.artists[2].bought

    player.inf[0].cost = player1.inf[0].cost
    player.inf[0].multincrease = player1.inf[0].multincrease
    player.inf[0].mult = player1.inf[0].mult
    player.inf[0].amount = player1.inf[0].amount
    player.inf[0].bought = player1.inf[0].bought

    player.inf[1].cost = player1.inf[1].cost
    player.inf[1].multincrease = player1.inf[1].multincrease
    player.inf[1].mult = player1.inf[1].mult
    player.inf[1].amount = player1.inf[1].amount
    player.inf[1].bought = player1.inf[1].bought

    player.inf[2].cost = player1.inf[2].cost
    player.inf[2].multincrease = player1.inf[2].multincrease
    player.inf[2].mult = player1.inf[2].mult
    player.inf[2].amount = player1.inf[2].amount
    player.inf[2].bought = player1.inf[2].bought
}
function clearGame() {
    localStorage.clear("player")
    alert("Saved Cleared. Reload to start over")
}
