// place all recyclables and non recycalables in their respecttive container 

function Trash(isRecyclable, material) {
    this.isRecyclable = isRecyclable
    this.material = material
}

const trashToPickUp = [];
const trashBin = [];
const plasticsBin = [];
const glassBin = [];
const papersBin = [];

const generateTrash = (amount) => {

    let hash1 = null;
    let hash2 = null;

    while (trashToPickUp.length < amount) {

        hash1 = Math.random().toFixed(1) > .5 ? true : false

        if (hash1) {
            let hash3 = Math.random()

            hash2 = hash3 > .75 ? 'plastic' 
            : hash3 < .25 ? 'glass' 
            : 'paper'
        } else {hash2 = 'irrelevant'}

         trashToPickUp.push(new Trash (hash1, hash2))
    }
    
}

const organizeTrash = () => {

    while (trashToPickUp.length > 0) {

        if (trashToPickUp[0].isRecyclable) {

            trashToPickUp[0].material == 'plastic' ? plasticsBin.push(trashToPickUp[0])
            : trashToPickUp[0].material == 'glass' ? glassBin.push(trashToPickUp[0])
            : trashToPickUp[0].material == 'paper' ? papersBin.push(trashToPickUp[0])
            : console.log('error');
            
        } else {

             trashBin.push(trashToPickUp[0])
            
        }

        trashToPickUp.splice(0, 1)
        
    }

} 

generateTrash(15)
// organizeTrash()

trashToPickUp

trashBin
plasticsBin
glassBin
papersBin