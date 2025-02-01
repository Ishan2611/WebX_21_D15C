interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}
class Manager implements Employee {
    name: string;
    id: number;
    role: string;
    department: string;

    constructor(name: string, id: number, role: string, department: string) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }

    getDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}
class Developer implements Employee {
    name: string;
    id: number;
    role: string;
    programmingLanguages: string[];

    constructor(name: string, id: number, role: string, programmingLanguages: string[]) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    getDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Languages: ${this.programmingLanguages.join(", ")}`;
    }
}
const manager = new Manager("Ishan", 101, "Manager", "HR");
const developer = new Developer("Joshi", 102, "Developer", ["JavaScript", "TypeScript", "Python"]);
console.log(manager.getDetails());
console.log(developer.getDetails());
