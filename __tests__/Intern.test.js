const path = require("path");
const Intern = require("../lib/Intern");

const intern = new Intern("jeff", "123", "jeff@email.com", "school1", "intern")

test('Employee School', () => {
    expect(intern.getSchool()).toBe("school1");
  });
  test('Employee Role', () => {
    expect(intern.getRole()).toBe("Intern");
  });