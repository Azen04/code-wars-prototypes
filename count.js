// construct string based off provided characters

function getWantedLetter(string, wanted) {

    let count = 0;

    count

    for (let index = 0; index < string.length; index++) {
        let character = string[index];

        character == wanted ? count++ : console.log('not wanted');
        
    }
    
    count

    return count;

}



console.log(getWantedLetter('i broke into a house today', ' '));




