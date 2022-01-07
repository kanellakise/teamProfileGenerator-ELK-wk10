const genManager = function(manager) {
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

const genEngineer = function(engineer) {
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

const genIntern = function(intern) {
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
        </div>
      </div>

      <div class="content">
        <span>ID: ${intern.id}</span>
        <span>School: ${intern.school}</span>
      </div>
    </div>
  </div>
  `
};