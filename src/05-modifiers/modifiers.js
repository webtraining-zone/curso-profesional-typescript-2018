var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // Parameter properties
    function User(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.MAX_CONNECTIONS = 3;
    }
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, firstName, lastName, email, _tId) {
        var _this = _super.call(this, id, firstName, lastName, email) || this;
        _this._tId = _tId;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "tId", {
        get: function () {
            return this._tId;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, firstName, lastName, email, _sId) {
        var _this = _super.call(this, id, firstName, lastName, email) || this;
        _this._sId = _sId;
        return _this;
    }
    Object.defineProperty(Student.prototype, "sId", {
        get: function () {
            return this._sId;
        },
        set: function (sId) {
            this._sId = "UUID-" + sId;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(User));
var luis = new Teacher(1, 'Luis', 'Rodríguez', 'luis@webtraiining.zone');
var esmeralda = new Student(1, 'Esmeralda', 'Rodríguez', 'esmeralda@webtraiining.zone', 'SMA-2134');
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
