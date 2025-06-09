// string
// string

// split string
// loop
// conditional
// register value && index
// plus plus on occurence
// condtional
// concat firstValue && count
// reassign start value in array
// 

// ON HOLD

function compressStr(string) {
    const strArray = string.split('')
    // const registered = []

    let count = 0

    let storedChar
    let position = 0

    strArray.forEach((first, index) => {
        console.log(registered);

        if (index == strArray.length - 1) {
            count = strArray.slice(position, count + 1)
            strArray.splice(position, 0,)
        }

        else {

            if (index != 0) {
                console.log('ran');

                strArray.splice(position, 1, `${strArray[position]}${count}`)
            }
            // console.log('ran');

            registered.push(first)
            position = index
            count = 0
        }
    });

    return strArray.join('')
}

console.log(compressStr('aaaabb'));
