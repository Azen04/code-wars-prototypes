function Book(title, author, year, genre) {
    this.title = title
    this.author = author
    this.year = year
    this.genre = genre
}

Book.prototype.getSummary = function () {
    return `${this.title} was made in ${this.year} and falls within the ${this.genre} genre`
}

Book.prototype.isClassic = function () {
    return 2025 - this.year > 50 ? true : false
}

Book.prototype.updateYear = function (newYear) {

    this.year = newYear

    return `Publication year updated to ${this.year}`

}

Book.prototype.updateGenre = function (newGenre) {

    this.genre = newGenre

    return `Genre updated to ${this.genre}`

}

const tkam = new Book('To Kill A Mockingbird', 'Harper Lee', 1960, 'Fiction')

console.log(tkam.getSummary());
console.log(tkam.isClassic());
console.log(tkam.updateYear(1980));
console.log(tkam.updateGenre('non fiction'));
console.log(tkam.isClassic());
console.log(tkam.getSummary());

class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.grades = []
    }

    gender = 'male'

    addGrade(grade) {
        if (grade <= 100 && grade >= 0) {
            return this.grades.push(grade)
        } else { return console.log('Grade must be between 0 and 100'); }
    }

    calculateAverageGrade() {
        if (this.grades.length > 0) {

            let sum = 0;
            let index = 0;

            while (index < this.grades.length) {
                sum += this.grades[index]
                index++
            }

            return sum / this.grades.length


        } else { return 0 }
    }

    hasPassed(passingGrade) {

        return this.calculateAverageGrade() >= passingGrade ? true : false

    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }


}


class Course {
    constructor(title) {
        this.title = title
        this.students = []
    }

    enrollStudent(student) {
        this.students.push(student)
    }

    listStudents() {
        let index = 0;

        while (index < this.students.length) {

            console.log(this.students[index]);
            index++

        }

        return this.students
    }

    calculateCourseAverage() {

        let index = 0
        let sum = 0

        if (this.students.length > 0) {
            while (index < this.students.length) {
                sum += this.students[index].calculateAverageGrade()
                index++
            }
        } else { return 0 }


        return sum / this.students.length

    }
}

const student1 = new Student('john', 20)

student1

student1

console.log(student1.calculateAverageGrade());

console.log(student1.hasPassed(0));
console.log(student1.getAge());
console.log(student1.getName());

const mathematics = new Course('math')

mathematics


const student2 = new Student('stan', 40)



student2

console.log(mathematics.listStudents());

console.log(mathematics.calculateCourseAverage());





