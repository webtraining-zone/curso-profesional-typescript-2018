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
    function User(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, firstName, lastName, email, tId) {
        var _this = _super.call(this, id, firstName, lastName, email) || this;
        _this.tId = tId;
        return _this;
    }
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, firstName, lastName, email, sId) {
        var _this = _super.call(this, id, firstName, lastName, email) || this;
        _this.sId = sId;
        return _this;
    }
    return Student;
}(User));
var luis = new Teacher(1, 'Luis', 'Rodríguez', 'luis@webtraiining.zone');
var esmeralda = new Student(1, 'Esmeralda', 'Rodríguez', 'esmeralda@webtraiining.zone', 'SMA-2134');
console.log(luis.email);
console.log(esmeralda.sId);
