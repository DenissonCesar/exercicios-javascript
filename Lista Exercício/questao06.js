function bhaskara(ax2, bx, c) {
    let delta = Math.pow(bx, 2) - (4 * ax2 * c);
    if (delta < 0) {
        return "Delta negativo!";
    }

    let bhaskara1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    let bhaskara2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
    if (delta === 0) {
        return bhaskara1.toFixed(2)
    }

    return [`${bhaskara1.toFixed(2)}`, `${bhaskara2.toFixed(2)}`];
}


console.log(bhaskara(1, -3, 2))


