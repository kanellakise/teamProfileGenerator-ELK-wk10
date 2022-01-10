// Generate HTML for Manager card
const genManager = function (manager) {
  return `
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${manager.name}</p>
          <p class="subtitle is-6">${manager.email}</p>
          <p class="subtitle is-6">${manager.getRole()}</p>
        </div>
      </div>

      <div class="content">
        <span>${manager.id}</span>
        <span>${manager.officeNumber}</span>
      </div>
    </div>
  </div>
  `;
};

// Generate HTML for Engineer card
const genEngineer = function (engineer) {
  return `
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${engineer.name}</p>
          <p class="subtitle is-6">${engineer.email}</p>
          <p class="subtitle is-6">${engineer.getRole()}</p>
        </div>
      </div>

      <div class="content">
        <span>${engineer.id}</span>
        <span>http://github.com/${engineer.github}</span>
      </div>
    </div>
  </div>
  `;
};

// Generate HTML for Intern card
const genIntern = function (intern) {
  return `
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
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
  </head>
  
  <body>
      <header class="has-text-centered m-auto">
          <nav class=' is-centered is-vcentered is-mobile'>
              <span class="is-size-1 has-text-centered has-text-weight-bold">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="column">
              <div class="row justify-content-center columns" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
  
  </body>
  
  </html>
  `;
};

module.exports = genHtml;