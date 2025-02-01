var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        return "Library Account ID: ".concat(this.accountId, ", Books Issued: ").concat(this.booksIssued);
    };
    return LibraryAccount;
}());
var Student = /** @class */ (function () {
    function Student(name, studentId, grade, libraryAccount) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.libraryAccount = libraryAccount;
    }
    Student.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Student ID: ").concat(this.studentId, ", Grade: ").concat(this.grade);
    };
    Student.prototype.getLibraryDetails = function () {
        return this.libraryAccount.getLibraryInfo();
    };
    return Student;
}());
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic, libraryAccount) {
        var _this = _super.call(this, name, studentId, grade, libraryAccount) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Thesis: ").concat(this.thesisTopic);
    };
    GraduateStudent.prototype.getThesisTopic = function () {
        return "Thesis Topic: ".concat(this.thesisTopic);
    };
    return GraduateStudent;
}(Student));
// Creating a LibraryAccount instance
var studentLibrary = new LibraryAccount(2002, 5);
// Creating a Student instance
var student = new Student("Ishan", 21, "A+", studentLibrary);
console.log(student.getDetails()); // Name: Ethan, Student ID: 11223, Grade: B+
console.log(student.getLibraryDetails()); // Library Account ID: 2002, Books Issued: 5
// Creating a GraduateStudent instance
var gradStudent = new GraduateStudent("Joshi", 211, "A", "Cybersecurity in IoT", studentLibrary);
console.log(gradStudent.getDetails()); // Name: Sophia, Student ID: 33445, Grade: A, Thesis: Cybersecurity in IoT
console.log(gradStudent.getLibraryDetails()); // Library Account ID: 2002, Books Issued: 5
