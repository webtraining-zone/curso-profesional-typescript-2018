// Tuples
let tupleWithNumbers: [number, number, number];

function updateTuples() {
    // tupleWithNumbers = [false, '1', 4]; // Error types don't match
    tupleWithNumbers = [1, 4, 5]
}

// Enums
enum Role { STUDENT, TEACHER, ADMIN}

console.log('Value for STUDENT', Role.STUDENT);

const teacherRole: Role = Role.TEACHER;
console.log('Value for teacherRole', teacherRole);

// Any
let unknownValue: any;
unknownValue = false;
unknownValue = 8;
unknownValue = 'Not recommended, please do not do it!!';

console.log('unknownValue', unknownValue);

// Void (no type at all)
// All you know about JavaScript can be used in TypeScript like IIFEs
(function printMessage(): void {
    console.log('>> printMessage() >> not useful');
})();
