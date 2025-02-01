class LibraryAccount {
    accountId: number;
    booksIssued: number;

    constructor(accountId: number, booksIssued: number) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }

    getLibraryInfo(): string {
        return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}

class Student {
    name: string;
    studentId: number;
    grade: string;
    libraryAccount: LibraryAccount;

    constructor(name: string, studentId: number, grade: string, libraryAccount: LibraryAccount) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.libraryAccount = libraryAccount;
    }

    getDetails(): string {
        return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}`;
    }

    getLibraryDetails(): string {
        return this.libraryAccount.getLibraryInfo();
    }
}

class GraduateStudent extends Student {
    thesisTopic: string;

    constructor(name: string, studentId: number, grade: string, thesisTopic: string, libraryAccount: LibraryAccount) {
        super(name, studentId, grade, libraryAccount);
        this.thesisTopic = thesisTopic;
    }

    override getDetails(): string {
        return `${super.getDetails()}, Thesis: ${this.thesisTopic}`;
    }

    getThesisTopic(): string {
        return `Thesis Topic: ${this.thesisTopic}`;
    }
}

const studentLibrary = new LibraryAccount(2002, 5);
const student = new Student("Ishan", 21, "A+", studentLibrary);
console.log(student.getDetails());          
console.log(student.getLibraryDetails());   
const gradStudent = new GraduateStudent("Joshi", 211, "A", "Cybersecurity in IoT", studentLibrary);
console.log(gradStudent.getDetails());      
console.log(gradStudent.getLibraryDetails()); 
