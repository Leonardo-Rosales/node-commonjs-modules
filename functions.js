function person(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}

function hobby(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    };
}




module.exports = {person, hobby}