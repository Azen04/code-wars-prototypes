// synchronous action
// declare array

// async actions
// populate array


// async populate array with numbers

populateArray(createShape(createShapeType()))

const shapesArray = []

console.log(shapesArray);
// functinos

async function populateArray(promise) {

    const shape = await promise

    console.log(shape);


    while (shapesArray.length < 10) {
        shapesArray.push(shape)
    }

}

async function createShape(promise) {

    const shapeType = await promise

    const shape = {
        type: shapeType
    }

    shapesArray.push(shape)

    return shape
}

async function createShapeType() {
    return 'square'
}