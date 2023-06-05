// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Intern extends Employee {

    constructor(name, id, email, school) {

        //check if all parameteres are of the correct format
        // if (typeof name != "string") {
        //     throw new Error("Name must be a text.");
        // }
        // if (typeof id != "number") {
        //     throw new Error("Id must be a number");
        // }
        // if (typeof email != "string") {
        //     throw new Error("Email must be a text.");
        // }
        // if (typeof school != "string") {
        //     throw new Error("School must be a text");
        // }

        // assign all parameters to the object
        super(name, id, email);
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;