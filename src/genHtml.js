// Generate HTML for Manager card
const genManager = function (manager) {
  return `
  <div class="card column is-one-third">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="">
          <i class="fas fa-user-tie is-2"></i>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${manager.name}</p>
          <p class="subtitle is-6">${manager.email}</p>
          <p class="subtitle is-6">${manager.getRole()}</p>
        </div>
      </div>

      <div class="content">
        <span>ID: ${manager.id}</span>
        <span>Office Number: ${manager.officeNumber}</span>
      </div>
    </div>
  </div>
  `;
};

// Generate HTML for Engineer card
const genEngineer = function (engineer) {
  return `
  <div class="card column is-one-third">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="">
          <i class="fas fa-user-cog"></i>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${engineer.name}</p>
          <p class="subtitle is-6">${engineer.email}</p>
          <p class="subtitle is-6">${engineer.getRole()}</p>
        </div>
      </div>

      <div class="content">
        <span>ID: ${engineer.id}</span>
        <span>GitHub: https://github.com/${engineer.github}</span>
      </div>
    </div>
  </div>
  `;
};

// Generate HTML for Intern card
const genIntern = function (intern) {
  return `
  <div class="card column is-one-third">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="">
          <i class="fas fa-user-graduate"></i>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${intern.name}</p>
          <p class="subtitle is-6">${intern.email}</p>
          <p class="subtitle is-6">${intern.getRole()}</p>
        </div>
      </div>

      <div class="content">
        <span>ID: ${intern.id}</span>
        <span>School: ${intern.school}</span>
      </div>
    </div>
  </div>
  `;
};

// Process team data and create html cards
genHtml = (data) => {
  let pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();


    if (role === 'Manager') {
      const managerCard = genManager(employee);

      pageArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = genEngineer(employee);

      pageArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = genIntern(employee);

      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join('');

  const generateTeam = generateTeamPage(employeeCards);

  return generateTeam;

};

// Function inserts team cards into HTML body
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/34ec37a817.js" crossorigin="anonymous"></script>
    </head>
    <body>
      <header class="has-text-centered m-auto">
          <nav class=' is-centered is-vcentered is-mobile'>
              <span class="is-size-1 has-text-centered has-text-weight-bold">Team Profile</span>
          </nav>
      </header>
      <main class="columns is-multiline">
        ${employeeCards}
      </main>
    </body>
  </html>
  `;
};

module.exports = genHtml;