// create a function that takes in a number and based on that number creates an object with properties that contain an array and have a letter as an identifier


function createBoard(size) {

    const board = {}
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let index = 0;



    while (index < size) {
        board[letters[index]] = [1, 2, 3, 4]
        index++
    }

    return board
}

console.table(createBoard(6));

const board = createBoard(4)

// reference a specific spot on the board


// create a function that taes a string that conatins a letter and a number

function hitZone(zone) {

    let row = zone[0]
    let column = zone[1]

    

    return console.log(board[row][column]);
    
}

hitZone('A1')

console.log(`========
__   _______ _   _   _    _ _____ _   _
\ \ / /  _  | | | | | |  | |_   _| \ | |
 \ V /| | | | | | | | |  | | | | |  \| |
  \ / | | | | | | | | |/\| | | | | . ' |
  | | \ \_/ / |_| | \  /\  /_| |_| |\  |
  \_/  \___/ \___/   \/  \/ \___/\_| \_/
========`);