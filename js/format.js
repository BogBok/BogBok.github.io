function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    let million = amount / Math.pow(10, power)
    if (power < 4) return amount.toFixed(2)
    if (power < 5) return (million * 10).toFixed(2) + " Thousand" //Dispays 10 Thousand
    if (power < 6) return (million * 100).toFixed(2) + " Thousand" //Dispays 100 Thousand

    if (power < 7) return (million * 1).toFixed(2) + " Million" //Dispays 1 Million
    if (power < 8) return (million * 10).toFixed(2) + " Million" //Dispays 10 Million
    if (power < 9) return (million * 100).toFixed(2) + " Million" //Dispays 100 Million

    if (power < 10) return (million * 1).toFixed(2) + " Billion" //Dispays 1 Billion
    if (power < 11) return (million * 10).toFixed(2) + " Billion" //Dispays 10 Billion
    if (power < 12) return (million * 100).toFixed(2) + " Billion" //Dispays 100 Billion

    if (power < 13) return (million * 1).toFixed(2) + " Trillion" //Dispays 1 Trillion and starts giving gems
    if (power < 14) return (million * 10).toFixed(2) + " Trillion" //Dispays Trillion
    if (power < 15) return (million * 100).toFixed(2) + " Trillion" //Dispays Trillion

    if (power < 16) return (million * 1).toFixed(2) + " Quadrillion" //Dispays 1 Quadrillion
    if (power < 17) return (million * 10).toFixed(2) + " Quadrillion" //Dispays 10 Quadrillion
    if (power < 18) return (million * 100).toFixed(2) + " Quadrillion" //Dispays 100 Quadrillion

    if (power < 19) return (million * 1).toFixed(2) + " Quintillion" //Dispays 1 Quintillion
    if (power < 20) return (million * 10).toFixed(2) + " Quintillion" //Dispays 10 Quintillion
    if (power < 21) return (million * 100).toFixed(2) + " Quintillion" //Dispays 100 Quintillion

    if (power < 22) return (million * 1).toFixed(2) + " Sextillion" //Dispays 1 Sextillion
    if (power < 23) return (million * 10).toFixed(2) + " Sextillion" //Dispays 10 Sextillion
    if (power < 24) return (million * 100).toFixed(2) + " Sextillion" //Dispays 100 Sextillion

    if (power < 25) return (million * 1).toFixed(2) + " Septillion" //Dispays 1 Septillion
    if (power < 26) return (million * 10).toFixed(2) + " Septillion" //Dispays 10 Septillion
    if (power < 27) return (million * 100).toFixed(2) + " Septillion" //Dispays 100 Septillion

    if (power < 28) return (million * 1).toFixed(2) + " Octillion" //Dispays 1 Octillion
    if (power < 29) return (million * 10).toFixed(2) + " Octillion" //Dispays 10 Octillion
    if (power < 30) return (million * 100).toFixed(2) + " Octillion" //Dispays 100 Octillion

    if (power < 31) return (million * 1).toFixed(2) + " Nonillion" //Dispays 1 Nonillion
    if (power < 32) return (million * 10).toFixed(2) + " Nonillion" //Dispays 10 Nonillion
    if (power < 33) return (million * 100).toFixed(2) + " Nonillion" //Dispays 100 Nonillion

    if (power < 34) return (million * 1).toFixed(2) + " Decillion" //Dispays 1 Decillion
    if (power < 25) return (million * 10).toFixed(2) + " Decillion" //Dispays 10 Decillion
    if (power < 36) return (million * 100).toFixed(2) + " Decillion" //Dispays 100 Decillion

    if (power < 37) return (million * 1).toFixed(2) + " Undecillion" //Dispays 1 Undecillion
    if (power < 38) return (million * 10).toFixed(2) + " Undecillion" //Dispays 10 Undecillion
    if (power < 39) return (million * 100).toFixed(2) + " Undecillion" //Dispays 100 Undecillion
    if (power < Infinity) return mantissa.toFixed(2) + "e" + power
    if (player.money === Infinity || player.deposit === Infinity || player.olddeposit === Infinity || 
        player.money === NaN || player.deposit === NaN || player.olddeposit === NaN) return "Infinity"
}