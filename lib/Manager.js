// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

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
        // if (typeof officeNumber != "number") {
        //     throw new Error("Office number must be a number");
        // }

        // assign all parameters to the object
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;