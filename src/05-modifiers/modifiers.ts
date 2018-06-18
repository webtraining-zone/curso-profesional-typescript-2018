class User {
    readonly MAX_CONNECTIONS: number;

    // Parameter properties
    constructor(private id: number,
                private firstName: string,
                private lastName: string,
                private email: string) {
        this.MAX_CONNECTIONS = 3;
    }
}

class Teacher extends User {

    constructor(id: number, firstName: string, lastName: string, email: string, private _tId?: string) {
        super(id, firstName, lastName, email);
    }

    get tId() {
        return this._tId;
    }

}

class Student extends User {

    constructor(id: number, firstName: string, lastName: string, email: string, private _sId: string) {
        super(id, firstName, lastName, email);
    }

    get sId() {
        return this._sId;
    }

    set sId(sId: string) {
        this._sId = `UUID-${sId}`
    }
}

let luis = new Teacher(1, 'Luis', 'Rodríguez', 'luis@webtraiining.zone');
let esmeralda = new Student(1, 'Esmeralda', 'Rodríguez', 'esmeralda@webtraiining.zone', 'SMA-2134');

// Getter
console.log(luis.tId);

// Getter
console.log(esmeralda.sId);

// Setter
esmeralda.sId = 'ESM-5678';
console.log(esmeralda.sId);

// "readonly" example
// ERROR! MAX_CONNECTIONS is "readonly"
// esmeralda.MAX_CONNECTIONS = 10;
console.log(esmeralda.MAX_CONNECTIONS);
