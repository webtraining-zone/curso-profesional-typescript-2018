// Basic Types (primitive)
var MAX_CONNECTIONS = 3;
var numberOfConnections = 4;
var firstName = 'Esmeralda';
var roles = ['TEACHER', 'STUDENT'];
function isUserAuthorized(user, useStrictValidation) {
    if (useStrictValidation === void 0) { useStrictValidation = false; }
    var isTeacher = false;
    var isStudent = false;
    console.log(user, useStrictValidation);
    if (useStrictValidation && numberOfConnections > MAX_CONNECTIONS) {
        console.log('Not authorized!');
        return false;
    }
    return !(isTeacher && isStudent);
}
function addRole(role) {
    // roles.push(1); // error
    // roles.push(false);
    roles.push(role);
}
isUserAuthorized({ firstName: firstName });
isUserAuthorized({ firstName: firstName }, true);
// Adding a role
addRole('ADMIN');
console.log('roles', roles);
