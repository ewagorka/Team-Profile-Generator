// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {

    constructor(name, id, email, github) {

        //check if all parameteres are of the correct format
        if (typeof name != "string") {
            throw new Error("Name must be a text.");
        }
        if (typeof id != "number") {
            throw new Error("Id must be a number");
        }
        if (typeof email != "string") {
            throw new Error("Email must be a text.");
        }
        if (typeof github != "string") {
            throw new Error("Github username must be a text");
        }

        // assign all parameters to the object
        super(name, id, email);
        this.github = github;
    }
    
    getGithub(){
        return this.github;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Engineer;