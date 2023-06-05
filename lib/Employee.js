// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {

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

        // assign all parameters to the object
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

//export Employee object
module.exports = Employee;