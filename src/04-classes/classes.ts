class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;

    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

class Teacher extends User {
    tId: string;

    constructor(id: number, firstName: string, lastName: string, email: string, tId?: string) {
        super(id, firstName, lastName, email);
        this.tId = tId;
    }

}

class Student extends User {
    sId: string;

    constructor(id: number, firstName: string, lastName: string, email: string, sId: string) {
        super(id, firstName, lastName, email);
        this.sId = sId;
    }
}

let luis = new Teacher(1, 'Luis', 'Rodríguez', 'luis@webtraiining.zone');
let esmeralda = new Student(1, 'Esmeralda', 'Rodríguez', 'esmeralda@webtraiining.zone', 'SMA-2134');

console.log(luis.email);
console.log(esmeralda.sId);