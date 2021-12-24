var app = new Vue({
    el: "#app",
    data: {
        player: player
    },
    methods: {
        buyInfGenerator(i) {
            let g = this.player.inf[i]
            if (g.cost > this.player.infpoints) return
            this.player.infpoints -= g.cost
            if (i === 0) {
                this.player.inf[i].cost *= 1.3
            } else if (i === 1) {
                this.player.inf[i].cost *= 1.75
            } else if (i === 2) {
                this.player.inf[i].cost *= 2.2
            }
            this.player.inf[i].amount += 1
            this.player.inf[i].bought += 1
            if (this.player.inf[i].bought === 10) {
                this.player.inf[i].multincrease  += 3
            }
            if (this.player.inf[i].bought === 25) {
                this.player.inf[i].multincrease  += 6
            }
            if (this.player.inf[i].bought === 100) {
                this.player.inf[i].multincrease += 10
            }
            if (this.player.inf[i].bought === 250) {
                this.player.inf[i].multincrease  += 20
            }
            if (this.player.inf[i].bought === 1000) {
                this.player.inf[i].multincrease  += 30
            }
        },
        buyArtistsGenerator(i) {
            let g = this.player.artists[i]
            if (g.cost > this.player.gems) return
            this.player.gems -= g.cost
            if (i === 0) {
                this.player.artists[i].cost *= 1.25
            } else if (i === 1) {
                this.player.artists[i].cost *= 1.6
            } else if (i === 2) {
                this.player.artists[i].cost *= 1.95
            }
            this.player.artists[i].amount += 1
            this.player.artists[i].bought += 1
            if (this.player.artists[i].bought === 10) {
                this.player.artists[i].multincrease  += 2
            }
            if (this.player.artists[i].bought === 25) {
                this.player.artists[i].multincrease  += 2
            }
            if (this.player.artists[i].bought === 100) {
                this.player.artists[i].multincrease += 2
            }
            if (this.player.artists[i].bought === 250) {
                this.player.artists[i].multincrease  += 3
            }
            if (this.player.artists[i].bought === 1000) {
                this.player.artists[i].multincrease  += 5
            }
        },
        buyMarketingGenerator(i) {
            let g = this.player.marketing[i]
            if (g.cost > this.player.money) return
            this.player.money -= g.cost
            if (i === 0) {
                this.player.marketing[i].cost *= 1.1
            } else if (i === 1) {
                this.player.marketing[i].cost *= 1.25
            } else if (i === 2) {
                this.player.marketing[i].cost *= 1.4
            }
            this.player.marketing[i].amount += 1
            this.player.marketing[i].bought += 1
            if (this.player.marketing[i].bought === 10) {
                this.player.marketing[i].multincrease += 1
            }
            if (this.player.marketing[i].bought === 25) {
                this.player.marketing[i].multincrease += 1
            }
            if (this.player.marketing[i].bought === 100) {
                this.player.marketing[i].multincrease += 2
            }
            if (this.player.marketing[i].bought === 250) {
                this.player.marketing[i].multincrease += 2
            }
            if (this.player.marketing[i].bought === 1000) {
                this.player.marketing[i].multincrease += 3
            }
        },
        deposit10per() {
            const gemsunlockedone = document.getElementById("gem-unlockedone");
            gemsunlockedone.hidden = true
            gemsunlockedone.hidden = true
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity, this.player.money = Infinity
            this.player.deposit = (this.player.money * 1/10) + this.player.olddeposit
            this.player.money = this.player.money * 9/10
            this.player.olddeposit = this.player.deposit
        },
        deposit50per() {
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity, this.player.money = Infinity
            this.player.deposit = (this.player.money * 1/2) + this.player.olddeposit
            this.player.money = this.player.money * 1/2
            this.player.olddeposit = this.player.deposit
        },
        depositmaxper() {
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity, this.player.money = Infinity
            this.player.deposit = (this.player.money * 1) + this.player.olddeposit
            this.player.money = this.player.money * 0
            this.player.olddeposit = this.player.deposit
        },
        withdraw10per() {
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity, this.player.money = Infinity
            this.player.money = (this.player.deposit * 1/10) + this.player.money
            this.player.deposit = this.player.deposit * 9/10
            this.player.olddeposit = this.player.deposit
        },
        withdraw50per() {
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity, this.player.money = Infinity
            this.player.money = (this.player.deposit * 1/2) + this.player.money
            this.player.deposit = this.player.deposit * 1/2
            this.player.olddeposit = this.player.deposit
        },
        withdrawmaxper() {
            if (this.player.deposit === Infinity || this.player.deposit === NaN) return this.player.deposit = Infinity,this.player.money = Infinity
            this.player.money = (this.player.deposit * 1) + this.player.money
            this.player.deposit = this.player.deposit * 0
            this.player.olddeposit = this.player.deposit
        },
        upgradeintrest() {
            const bankintrest = document.getElementById("upbank1");
            let g = this.player
            if (player.upintrest > 1e202) return bankintrest.hidden = true
            if (g.upintrest > this.player.money) return
            this.player.money -= g.upintrest
            this.player.intrestrate += 4
            this.player.upintrest *= 100
        },
        upgradethetimer() {
            const banktimer = document.getElementById("upbank2");
            let g = this.player
            if (player.uptimer > 1e180) return banktimer.hidden = true
            if (g.uptimer > this.player.money) return
            this.player.money -= g.uptimer
            this.player.timermax -= 1
            this.player.uptimer *= 1000
            if (this.player.timer > this.player.timermax) {
                this.player.timer = this.player.timermax
            }
        },
        clearGame() {
            clearGame()
        },
        saveGame() {
            saveGame()
        },
        loadGame() {
            loadGame()
        },
        format(amount) {
            return format(amount)
        },
        gameLoop() {
            gameLoop(this)
        }
    },

    mounted() {
        window.onload = function() {
            loadGame();
        };
        setInterval(this.gameLoop, 50)
        setInterval(function() {
            saveGame();
        }, 300000); // 5 seconds
    }
})
