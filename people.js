const hobby = require("./hobbies.js");
const person = require("./names.js");


function createProfile() {
    const profile = {
        ...person('Leonardo','Rosales'),
        ...hobby('calcio', 'cucina', 'ballo')
    }
   

    return {
        profile
    };
}

console.log(createProfile());
