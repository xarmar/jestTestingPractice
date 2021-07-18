const sandBox = require('./sandbox');

it('capitalizes all letters', () => {
    expect(sandBox.capitalizeString('hello My frIend. HoW aRe you?')).toBe('HELLO MY FRIEND. HOW ARE YOU?');
    expect(sandBox.capitalizeString('123abc456')).toBe('123ABC456');
    expect(sandBox.capitalizeString('.ab.cd')).toBe('.AB.CD');
})

it('reverses a string', () => {
    expect(sandBox.reverseString('abcdef')).toBe('fedcba');
    expect(sandBox.reverseString('Ana')).toBe('anA');
});

it('sums two numbers', () => {
    expect(sandBox.calculator.sum(1,2)).toBe(3);
    expect(sandBox.calculator.sum(-5,2)).toBe(-3);
    expect(sandBox.calculator.sum(0,0)).toBe(0);
    expect(sandBox.calculator.sum(2,-1)).toBe(1);
    expect(sandBox.calculator.sum('chicken', 'sandwich')).toBe(undefined);
});

it('subtracts two numbers', () => {
    expect(sandBox.calculator.subtract(1,2)).toBe(-1);
    expect(sandBox.calculator.subtract(-5,2)).toBe(-7);
    expect(sandBox.calculator.subtract(0,0)).toBe(0);
    expect(sandBox.calculator.subtract(2,-1)).toBe(3);
    expect(sandBox.calculator.subtract('chicken', 'sandwich')).toBe(undefined);
});

it('multiplies two numbers', () => {
    expect(sandBox.calculator.multiply(1,2)).toBe(2);
    expect(sandBox.calculator.multiply(-5,2)).toBe(-10);
    expect(sandBox.calculator.multiply(0,0)).toBe(0);
    expect(sandBox.calculator.multiply(2,-1)).toBe(-2);
    expect(sandBox.calculator.multiply('chicken', 'sandwich')).toBe(undefined);
});

it('divides two numbers & handles 0 by 0 division exception', () => {
    expect(sandBox.calculator.division(1,2)).toBe(0.5);
    expect(sandBox.calculator.division(-5,2)).toBe(-2.5);
    expect(() => {sandBox.calculator.division(0, 0);}).toThrow();
    expect(sandBox.calculator.division(2,-1)).toBe(-2);
    expect(sandBox.calculator.division('chicken', 'sandwich')).toBe(undefined);
});

it('cifers text with an offset of X characters', () => {
    expect(sandBox.caesar('Hello my friend.', 1)).toBe('Ifmmp nz gsjfoe.');
    expect(sandBox.caesar('I like waffles, but ice-cream is better.', 10)). toBe('S vsuo gkppvoc, led smo-mbokw sc loddob.');
    expect(sandBox.caesar('Dogs are freaking awesome.', 24)). toBe('Bmeq ypc dpcyigle yucqmkc.');
})

it('given a array of numbers, return an object with min, max, average and length', () => {
    expect(sandBox.arrayAnalysis([1,8,3,4,2,6])).toEqual({ 
        average: 24 / 6,
        min: 1,
        max: 8,
        length: 6
        });
});
