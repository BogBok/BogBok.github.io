var gemsBool = new Boolean(false);
var infBool = new Boolean(false);

function gameLoop(that) {
    const gemsunlocked = document.getElementById("gems-unlocked");
    const infunlocked = document.getElementById("inf-unlocked");
    const gemsunlock = document.getElementsByClassName("artist-generator")[0];
    const gemsunlock2 = document.getElementsByClassName("artist-generator")[1];
    const gemsunlock3 = document.getElementsByClassName("artist-generator")[2];
    const infunlock = document.getElementsByClassName("inf-generator")[0];
    const infunlock2 = document.getElementsByClassName("inf-generator")[1];
    const infunlock3 = document.getElementsByClassName("inf-generator")[2];
    if (that.player.money > 25000 || gemsBool === true) {
        gemsunlock.style.visibility="visible"
        gemsunlock2.style.visibility="visible"
        gemsunlock3.style.visibility="visible"
        gemsunlocked.style.visibility="visible"
        gemsBool = true
    } else {
        gemsunlock.style.visibility="hidden";
        gemsunlock2.style.visibility="hidden";
        gemsunlock3.style.visibility="hidden";
        gemsunlocked.style.visibility="hidden";
    }
    if (that.player.money === 1e16 || infBool === true) {
        infunlock.style.visibility="visible"
        infunlock2.style.visibility="visible"
        infunlock3.style.visibility="visible"
        infunlocked.style.visibility="visible"
        infBool = true
    } else {
        infunlock.style.visibility="hidden";
        infunlock2.style.visibility="hidden";
        infunlock3.style.visibility="hidden";
        infunlocked.style.visibility="hidden";
    }
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.marketing[0].mult = that.player.marketing[0].multincrease * ((that.player.gems / 10000) + 1)
    that.player.marketing[1].mult = that.player.marketing[1].multincrease * ((that.player.gems / 10000) + 1)
    that.player.marketing[2].mult = that.player.marketing[2].multincrease * ((that.player.gems / 10000) + 1)

    that.player.artists[0].mult = that.player.artists[0].multincrease * ((that.player.infpoints / 10000) + 1)
    that.player.artists[1].mult = that.player.artists[1].multincrease * ((that.player.infpoints / 10000) + 1)
    that.player.artists[2].mult = that.player.artists[2].multincrease * ((that.player.infpoints / 10000) + 1)

    that.player.inf[0].mult = that.player.inf[0].multincrease
    that.player.inf[1].mult = that.player.inf[1].multincrease
    that.player.inf[2].mult = that.player.inf[2].multincrease

    that.player.money += that.player.marketing[0].amount * that.player.marketing[0].mult * diff
    that.player.marketing[0].amount += (that.player.marketing[1].amount * that.player.marketing[1].mult * diff) / 100
    that.player.marketing[1].amount += (that.player.marketing[2].amount * that.player.marketing[2].mult * diff) / 1000

    that.player.gems += that.player.artists[0].amount * that.player.artists[0].mult * diff
    that.player.artists[0].amount += (that.player.artists[1].amount * that.player.marketing[1].mult * diff) / 100
    that.player.artists[1].amount += (that.player.artists[2].amount * that.player.artists[2].mult * diff) / 1000

    that.player.infpoints += that.player.inf[0].amount * that.player.inf[0].mult * diff
    that.player.inf[0].amount += (that.player.inf[1].amount * that.player.inf[1].mult * diff) / 100
    that.player.inf[1].amount += (that.player.inf[2].amount * that.player.inf[2].mult * diff) / 1000

    that.player.lastUpdate = Date.now()
    that.player.timer -= diff
    if (that.player.timer < 0) {
        that.player.deposit *= that.player.intrestrate / 100
        that.player.timer = that.player.timermax
        that.player.olddeposit = that.player.deposit
    }
}
