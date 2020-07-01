function solve(input) {
    const typeEngine = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    return {
        model: input.model,
        engine: typeEngine.find(e => e.power >= input.power),
        carriage: { type: input.carriage, color: input.color },
        wheels: Array(4).fill(input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize),
    }
}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)