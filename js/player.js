var player = {
    olddeposit: 0,
    intrestrate: 104,
    timer: 60,
    timermax: 60,
    upintrest: 1e6,
    uptimer: 1e6,
    money: 10,
    deposit: 0,
    gems: 10,
    infpoints: 1,
    marketing: [],
    artists: [],
    inf: [],
    lastUpdate: Date.now()
}
var firstMarketing = {
    cost: 10,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var secondMarketing = {
    cost: 1000,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var thirdMarketing = {
    cost: 1e4,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var firstGem = {
    cost: 10,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var secondGem = {
    cost: 100,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var thirdGem = {
    cost: 1e5,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var firstInfinity = {
    cost: 1,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var secondInfinity = {
    cost: 100,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}
var thirdInfinity = {
    cost: 1e6,
    multincrease: 1,
    mult: 1,
    amount: 0,
    bought: 0
}

player.marketing.push(firstMarketing)
player.marketing.push(secondMarketing)
player.marketing.push(thirdMarketing)
player.artists.push(firstGem)
player.artists.push(secondGem)
player.artists.push(thirdGem)
player.inf.push(firstInfinity)
player.inf.push(secondInfinity)
player.inf.push(thirdInfinity)