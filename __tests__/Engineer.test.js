const path = require("path");
const Engineer = require("../lib/Engineer");

const engineer = new Engineer("jeff", "123", "jeff@email.com", "jeffhub", "Engineer")

test('Employee Github', () => {
    expect(engineer.getGithub()).toBe("jeffhub");
  });

test('Employee Role', () => {
expect(engineer.getRole()).toBe("Engineer");
});

