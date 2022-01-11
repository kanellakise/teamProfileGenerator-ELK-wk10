const Employee = require('./Employee')

// Modifies Employee object into Intern context
class Intern extends Employee {
  constructor(name, id, email, school = '') {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;