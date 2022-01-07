const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
  const manager = new Manager('Greg', '100', 'greg@boring.com', '38');

  expect(manager.name).toBe('Greg');
  expect(manager.id).toBe('100');
  expect(manager.email).toBe('greg@boring.com');
  expect(manager.officeNumber).toBe('38');
});

test('gets Manager Role', () => {
  const manager = new Manager('Greg', '100', 'greg@boring.com', '38');

  expect(manager.getRole()).toBe('Manager');
});