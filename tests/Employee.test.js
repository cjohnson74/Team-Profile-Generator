const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Successfully instantiates instance of Employee Class", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Gen";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("Successfully set an id via constructor arguments", () => {
    const id = "74";
    const employee = new Employee("Gen", id);
    expect(employee.id).toBe(id);
})

test("Successfully set an email via constructor arguments", () => {
    const email = "genesisvw305@gmail.com";
    const employee = new Employee("Gen", "1", email);
    expect(employee.email).toBe(email)
})

test("Successfully get the name via the getName function", () => {
    const name = "Genesis";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test("Sueccessfully get the id via the getId function", () => {
    const id = "47";
    const employee = new Employee("Genesis", id);
    expect(employee.getId()).toBe(id);
})

test("Successfully get the email via the getEmail function", () => {
    const email = "carson74johnson@gmail.com"
    const employee = new Employee("genesis", "47", email);
    expect(employee.getEmail()).toBe(email);
})

test("Successfully get the role via the getRole function", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
})