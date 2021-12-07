const path = require("path");
const Manager = require("../lib/Manager");

const manager = new Manager("jeff", "123", "jeff@email.com", "234", "manager")

test('Employee Office Number', () => {
    expect(manager.getOfficeNumber()).toBe("234");
  });
test('Employee Role', () => {
expect(manager.getRole()).toBe("manager");
});
