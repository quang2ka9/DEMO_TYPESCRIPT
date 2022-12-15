"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, phone, gender) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getGender = function () {
        return this.gender;
    };
    return User;
}());
exports["default"] = User;
