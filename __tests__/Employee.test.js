const path = require("path");
const Employee = require("../lib/Employee");

const employee = new Employee("jeff", "123", "jeff@email.com", "Employee")

test('Employee Name', () => {
    expect(employee.getName()).toBe("jeff");
  });
test('Employee ID', () => {
    expect(employee.getId()).toBe("123");
  });
test('Employee Email', () => {
    expect(employee.getEmail()).toBe("jeff@email.com");
  });
test('Employee Role', () => {
  expect(employee.getRole()).toBe("employee");
});  

