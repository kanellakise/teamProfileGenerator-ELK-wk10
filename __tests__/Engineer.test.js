const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Reginald', '106', 'reggy@nerd.com', 'reggycodes');

  expect(engineer.name).toBe('Reginald');
  expect(engineer.id).toBe('106');
  expect(engineer.email).toBe('reggy@nerd.com');
  expect(engineer.github).toBe('reggycodes');
})