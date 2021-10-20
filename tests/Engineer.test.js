const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("Successfully instantiates instance of Engineer Class", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Gen";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
})

test("Successfully set an id via constructor arguments", () => {
    const id = "74";
    const engineer = new Engineer("Gen", id);
    expect(engineer.id).toBe(id);
})

test("Successfully set an email via constructor arguments", () => {
    const email = "genesisvw305@gmail.com";
    const engineer = new Engineer("Gen", "1", email);
    expect(engineer.email).toBe(email)
})

test("Successfully set a github via constructor arguments", () => {
    const github = "genesisvw305";
    const engineer = new Engineer("Gen", "1", "genesisvw305@gmail.com", github);
    expect(engineer.github).toBe(github);
})

test("Successfully get the name via the getName function", () => {
    const name = "Genesis";
    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
})

test("Sueccessfully get the id via the getId function", () => {
    const id = "47";
    const engineer = new Engineer("Genesis", id);
    expect(engineer.getId()).toBe(id);
})

test("Successfully get the email via the getEmail function", () => {
    const email = "carson74johnson@gmail.com"
    const engineer = new Engineer("genesis", "47", email);
    expect(engineer.getEmail()).toBe(email);
})

test("Successfully get the role via the getRole function", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
})

test("Successfully get the github via the getGithub function", () => {
    const github = "genesisvw305";
    const engineer = new Engineer("Gen", "1", "genesisvw305@gmail.com", github);
    expect(engineer.getGithub()).toBe(github);
})