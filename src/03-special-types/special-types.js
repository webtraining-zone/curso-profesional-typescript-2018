// Tuples
var tupleWithNumbers;
function updateTuples() {
    // tupleWithNumbers = [false, '1', 4]; // Error types don't match
    tupleWithNumbers = [1, 4, 5];
}
// Enums
var Role;
(function (Role) {
    Role[Role["STUDENT"] = 0] = "STUDENT";
    Role[Role["TEACHER"] = 1] = "TEACHER";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
console.log('Value for STUDENT', Role.STUDENT);
var teacherRole = Role.TEACHER;
console.log('Value for teacherRole', teacherRole);
// Any
var unknownValue;
unknownValue = false;
unknownValue = 8;
unknownValue = 'Not recommended, please do not do it!!';
console.log('unknownValue', unknownValue);
// Void (no type at all)
// All you know about JavaScript can be used in TypeScript like IIFEs
(function printMessage() {
    console.log('>> printMessage() >> not useful');
})();
