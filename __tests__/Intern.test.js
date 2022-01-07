const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const intern = new Intern('Garby', '107', 'garby@flarby.com', 'UT');

  expect(intern.name).toBe('Garby');
  expect(intern.id).toBe('107');
  expect(intern.email).toBe('garby@flarby.com');
  expect(intern.school).toBe('UT');
});

test('gets Intern school', () => {
  const intern = new Intern('Garby', '107', 'garby@flarby.com', 'UT');

  expect(intern.getSchool()).toBe('UT');
});

test('gets Intern Role', () => {
  const intern = new Intern('Garby', '107', 'garby@flarby.com', 'UT');

  expect(intern.getRole()).toBe('Intern');
});