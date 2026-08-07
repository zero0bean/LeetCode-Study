/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
    let target = t;
    let sosu = [];
    while(true) {
        for(let i = 2; i <= Math.sqrt(t) ; i ++) {
            if (target % i === 0) {
                sosu.push(i);
                target = target % i;
                break;
            }
        }
        if ()
        break;
    }
    if (sosu.some(num => num >= 10)) {
        return -1;
    }

    console.log(sosu)
};