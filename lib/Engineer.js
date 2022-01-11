const Employee = require('./Employee');

// Modifies Employee object into Engineer context
class Engineer extends Employee {
  constructor(name, id, email, github = '') {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;