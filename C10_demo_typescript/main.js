"use strict";
exports.__esModule = true;
var User_1 = require("./src/User");
var readlineSync = require('readline-sync');
var users = [];
var createUser = function () {
    var name = readlineSync.question('Nhap Name: ');
    var email = readlineSync.question('Nhap Email: ');
    var phone = readlineSync.question('Nhap Phone: ');
    var gender = readlineSync.question('Nhap Gender (Male, Female, Other): ');
    var user = new User_1["default"](name, email, phone, gender);
    users.push(user);
};
var exits = false;
var menu = function () {
    while (!exits) {
        console.log('1: Danh sach nguoi dung');
        console.log('2: Them nguoi dung');
        console.log('3: Thoat');
        var number = readlineSync.question('Nhap lua chon tinh nang: ');
        switch (number) {
            case "1":
                console.table(users);
                break;
            case "2":
                createUser();
                break;
            default:
                exits = true;
        }
    }
};
menu();
