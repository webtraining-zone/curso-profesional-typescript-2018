// Basic Types (primitive)
const MAX_CONNECTIONS: number = 3;
let numberOfConnections: number = 4;
let firstName: string = 'Esmeralda';
let roles: Array<string> = ['TEACHER', 'STUDENT'];

function isUserAuthorized(user, useStrictValidation: boolean = false): boolean {
    let isTeacher: boolean = false;
    let isStudent = false;

    console.log(user, useStrictValidation);

    if (useStrictValidation && numberOfConnections > MAX_CONNECTIONS) {
        console.log('Not authorized!');
        return false;
    }

    return !(isTeacher && isStudent);
}

function addRole(role: string) {
    // roles.push(1); // error
    // roles.push(false);
    roles.push(role);
}

isUserAuthorized({firstName: firstName});
isUserAuthorized({firstName: firstName}, true);

// Adding a role
addRole('ADMIN');
console.log('roles', roles);