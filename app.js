// create a database of objects 
// create a function that fetches object data

const employeeDB = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Software Engineer",
    department: "Development",
    isActive: true
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Product Manager",
    department: "Product",
    isActive: false
  },
  {
    id: 3,
    name: "Cara Lee",
    title: "UX Designer",
    department: "Design",
    isActive: true
  }
];

function fetchEmployeeDataByID(id) {
    
    let index = 0;

    while (employeeDB.length > index) {

        if (employeeDB[index].id == id) {

            return console.log(employeeDB[index]);
            
        } else {
           index++ 
        }

    }
    console.log('employee id does not exist');
}

fetchEmployeeDataByID(0)

