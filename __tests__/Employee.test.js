const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('Phteven', '105', 'even@phteven.com')

  expect(employee.name).toBe('Phteven');
  expect(employee.id).toBe('105');
  expect(employee.email).toBe('even@phteven.com');
});

test('gets Employee name', () => {
  const employee = new Employee('Phteven');

  expect(employee.getName()).toBe('Phteven');
});

test('gets Employee id', () => {
  const employee = new Employee('Phteven', '105');

  expect(employee.getId()).toBe('105');
});

test('gets Employee email', () => {
  const employee = new Employee('Phteven', '105', 'even@phteven.com');

  expect(employee.getEmail()).toBe('even@phteven.com');
});

test('gets Employee role', () => {
  const employee = new Employee('Phteven', '105', 'even@phteven.com');

  expect(employee.getRole()).toBe('Employee');
});