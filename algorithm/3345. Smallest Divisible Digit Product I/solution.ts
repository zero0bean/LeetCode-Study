function smallestNumber(n: number, t: number): number {
    
    for (let i = n; i <= 100; i++){        
        const listN = [...String(i)].map(num => Number(num));
        const product = listN.reduce((product, num) => product *= num, 1);

        if (product % t === 0) {
            return i;
        }
    }
};