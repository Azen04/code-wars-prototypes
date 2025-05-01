// ask user for the following info
// name (first & last)
// age
// gender

// use provided info to create an object
// log object

const user = require('readline-sync')


let index = 0
const unformattedData = []
const dataToFill = setUserDataProperties(user.questionInt('How many properties would you like to add? '))
const userData = {}


while (dataToFill.length > index) {
    unformattedData.push(user.question(`What is your ${dataToFill[index]}: `))
    userData[dataToFill[index]] = unformattedData[index]

    index++
}


console.log(userData);

// have user set userData properties

 function setUserDataProperties (amount)  {

    const propertiesToAdd = []

    while (amount > propertiesToAdd.length) {

        propertiesToAdd.push(user.question(`property name: `))

    }

    return propertiesToAdd

}