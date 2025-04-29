class Board {
    constructor(size) {
        this.size = size
    }

    buildBoard() {

        this.zones = []
        this.data = []
        let rowIndex = 0; 


        while (this.zones.length < this.size) {
            this.zones.push([])
            this.data.push([])

            while (this.zones[rowIndex].length < this.size) {
                this.zones[rowIndex].push('-')
                this.data[rowIndex].push({
                    type: 'undecided',
                    id: 0,
                    hit: false
                })
            }
            rowIndex++
        }

    }

    buildShips() {

        let rowIndex = 0;
        let columnIndex = 0;
        let run = false;
        let zoneType = null;


        while (this.zones.length > rowIndex) {

            columnIndex = 0

            while (this.zones[rowIndex].length > columnIndex) {

                // let hash1 = Math.random()
                zoneType = null;
                run = false

                if (this.data[rowIndex][columnIndex].type == 'undecided') {
                    run = true
                 zoneType = Math.random() < .5 ? 'small'
                    : Math.random() > .5 ? 'large'
                        : 'empty'   
                } else {
                    run = false 
                }

                if (zoneType == 'empty') {
                    run = false
                    this.data[rowIndex][columnIndex].type = 'empty'
                }
                        zoneType
                        console.log(this.data[rowIndex][columnIndex].type);
                        

                if ( zoneType == 'small' && run) {

                    let openPaths = []
                    let rowIndex2 = 0;
                    let columnIndex2 = 0;
                    let checkedPaths = 0;
                    let openZonesInPath = 0;

                    console.log(columnIndex);

                    rowIndex - 2 >= 0 ? openPaths.push('north') : console.log('not enough space');
                    rowIndex + 2 <= this.size ? openPaths.push('south') : console.log('not enough space');
                    columnIndex - 2 >= 0 ? openPaths.push('west') : console.log('not enough space');
                    columnIndex + 2 <= this.size ? openPaths.push('east') : console.log('not enough space');

                    openPaths

                    while (openPaths.length > 0) {

                        if (openPaths[checkedPaths] == 'east') {
                            while (rowIndex2 < 2) {

                                if (this.data[rowIndex][columnIndex + rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (rowIndex2 < 2) {
                                    this.data[rowIndex][columnIndex + rowIndex2].type = zoneType

                                    rowIndex2++
                                }

                                console.log(gameBoard.data);
                                

                                break

                            } 

                            rowIndex2 = 0
                            openPaths.splice(checkedPaths, 1)
                        }

                        rowIndex2 = 0

                        if (openPaths[checkedPaths] == 'west') {
                            while (rowIndex2 < 2) {

                                if (this.data[rowIndex][columnIndex - rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (rowIndex2 < 2) {
                                    this.data[rowIndex][columnIndex - rowIndex2].type = zoneType

                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0

                            openPaths.splice(checkedPaths, 1)

                        }

                        if (openPaths[checkedPaths] == 'north') {
                            while (columnIndex2 < 2) {

                                if (this.data[rowIndex - columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (columnIndex2 < 2) {
                                    this.data[rowIndex - columnIndex2][columnIndex].type = zoneType
                                    columnIndex2++
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'south') {

                            console.log(columnIndex2);

                            while (columnIndex2 < 2) {

                                console.log(this.data[rowIndex + columnIndex2][columnIndex].type);
                                
                                console.log(rowIndex, columnIndex2);
                                
                                if (this.data[rowIndex + columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++

                                console.log(columnIndex2, openZonesInPath);
                                
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (columnIndex2 < 2) {


                                    console.log(this.data);
                                    
                                    this.data[rowIndex + columnIndex2][columnIndex].type = zoneType

                                    console.log(this.data);

                                    columnIndex2++
                                }

                                console.log(this.data);

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        // checkedPaths++
                    }

                } else if ( zoneType == 'large' && run) {

                    let openPaths = []
                    let rowIndex2 = 0;
                    let columnIndex2 = 0;
                    let checkedPaths = 0;
                    let openZonesInPath = 0;

                    console.log(rowIndex, columnIndex);

                    rowIndex - 3 >= 0 ? openPaths.push('north') : console.log('not enough space');
                    rowIndex + 3 <= this.size ? openPaths.push('south') : console.log('not enough space');
                    columnIndex - 3 >= 0 ? openPaths.push('west') : console.log('not enough space');
                    columnIndex + 3 <= this.size ? openPaths.push('east') : console.log('not enough space');

                    while (openPaths.length > 0) {

                        if (openPaths[checkedPaths] == 'east') {
                            while (rowIndex2 < 3) {

                                if (this.data[rowIndex][columnIndex + rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (rowIndex2 < 3) {
                                    this.data[rowIndex][columnIndex + rowIndex2].type = zoneType

                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0
                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'west') {
                            while (rowIndex2 < 3) {

                                if (this.data[rowIndex][columnIndex - rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (rowIndex2 < 3) {
                                    this.data[rowIndex][columnIndex - rowIndex2].type = zoneType

                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'north') {
                            while (columnIndex2 < 3) {

                                if (this.data[rowIndex - columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (columnIndex2 < 3) {
                                    this.data[rowIndex - columnIndex2][columnIndex].type = zoneType

                                    columnIndex2++
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'south') {

                            console.log(columnIndex2);

                            while (columnIndex2 < 3) {

                                console.log(this.data[rowIndex + columnIndex2][columnIndex].type);
                                
                                if (this.data[rowIndex + columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++

                                console.log(columnIndex2, openZonesInPath);
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (columnIndex2 < 3) {

                                    this.data[rowIndex + columnIndex2][columnIndex].type = zoneType
                                    columnIndex2++
                                    console.log(this.data);
                                    
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        // checkedPaths++
                    }
                }


                columnIndex++
            }

            rowIndex++
        }

    }

    debugBoard(command) {

        let rowIndex = 0
        let columnIndex = 0

        if (command) {

            while (this.zones.length > rowIndex) {

                while (this.zones[rowIndex].length > columnIndex) {
                    this.data[rowIndex][columnIndex].hit = true

                    console.log(this.zones[rowIndex][columnIndex]);
                    console.log(this.data[rowIndex][columnIndex]);
                    

                    columnIndex++
                }
                columnIndex = 0

                rowIndex++
            }

        } else {

            while (this.zones.length > rowIndex) {

                while (this.zones[rowIndex].length > columnIndex) {
                    this.data[rowIndex][columnIndex].hit = false

                    columnIndex++
                }

                rowIndex++
            }


        }

        return console.log(this.data);

    }

    printBoard() {

        let rowIndex = 0;
        let columnIndex = 0;
        let shipExist = null;


            while (this.zones.length > rowIndex) {

                while (this.zones[rowIndex].length > columnIndex) {
                    
                    // shipExist = this.data[rowIndex][columnIndex].type == 'empty' ? false : true  


                        this.zones[rowIndex][columnIndex] = this.data[rowIndex][columnIndex].type == 'small' ? '🟡' : this.data[rowIndex][columnIndex].type == 'large' ? '🔴' : '-'
                        


                    columnIndex++
                }
                columnIndex = 0

                rowIndex++
            }

           return  console.log(this.zones);

    }
}

const gameBoard = new Board(3)

gameBoard

console.log(gameBoard.buildBoard());

console.log(gameBoard.zones);

console.log(gameBoard.data);


console.log(gameBoard.data);

console.log(gameBoard.buildShips());

console.log(gameBoard.debugBoard(true));

console.log(gameBoard.data);

console.log(gameBoard.printBoard());

console.log(gameBoard.zones);

console.table(gameBoard.zones)




