
function hobby(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    };
}

console.log(hobby('calcio', 'cucina', 'ballo'));

module.exports = hobby