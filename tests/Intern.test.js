const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("Successfully instantiates instance of Intern Class", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Gen";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
})

test("Successfully set an id via constructor arguments", () => {
    const id = "74";
    const intern = new Intern("Gen", id);
    expect(intern.id).toBe(id);
})

test("Successfully set an email via constructor arguments", () => {
    const email = "genesisvw305@gmail.com";
    const intern = new Intern("Gen", "1", email);
    expect(intern.email).toBe(email)
})

test("Successfully set a school via constructor arguments", () => {
    const school = "UF";
    const intern = new Intern("Gen", "1", "genesisvw305@gmail.com", school);
    expect(intern.school).toBe(school);
})

test("Successfully get the name via the getName function", () => {
    const name = "Genesis";
    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
})

test("Sueccessfully get the id via the getId function", () => {
    const id = "47";
    const intern = new Intern("Genesis", id);
    expect(intern.getId()).toBe(id);
})

test("Successfully get the email via the getEmail function", () => {
    const email = "carson74johnson@gmail.com"
    const intern = new Intern("genesis", "47", email);
    expect(intern.getEmail()).toBe(email);
})

test("Successfully get the role via the getRole function", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
})

test("Successfully get the school via the getGithub function", () => {
    const school = "UF";
    const intern = new Intern("Gen", "1", "genesisvw305@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
})