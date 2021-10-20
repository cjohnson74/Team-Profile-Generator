const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Successfully instantiates instance of Manager Class", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Gen";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
})

test("Successfully set an id via constructor arguments", () => {
    const id = "74";
    const manager = new Manager("Gen", id);
    expect(manager.id).toBe(id);
})

test("Successfully set an email via constructor arguments", () => {
    const email = "genesisvw305@gmail.com";
    const manager = new Manager("Gen", "1", email);
    expect(manager.email).toBe(email)
})

test("Successfully set a office number via constructor arguments", () => {
    const officeNumber = "305";
    const manager = new Manager("Gen", "1", "genesisvw305@gmail.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
})

test("Successfully get the name via the getName function", () => {
    const name = "Genesis";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
})

test("Sueccessfully get the id via the getId function", () => {
    const id = "47";
    const manager = new Manager("Genesis", id);
    expect(manager.getId()).toBe(id);
})

test("Successfully get the email via the getEmail function", () => {
    const email = "carson74johnson@gmail.com"
    const manager = new Manager("genesis", "47", email);
    expect(manager.getEmail()).toBe(email);
})

test("Successfully get the role via the getRole function", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
})

test("Successfully get the office number via the getOfficeNumber function", () => {
    const officeNumber = "305";
    const manager = new Manager("Gen", "1", "genesisvw305@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})