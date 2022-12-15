import User from "./User";
let readlineSync = require('readline-sync');

class UserManager {
    users: User<string>[] = [];


    addUser(): void {
        let name = readlineSync.question('Nhap Name: ')
        let email = readlineSync.question('Nhap Email: ')
        let phone = readlineSync.question('Nhap Phone: ')
        let gender = readlineSync.question('Nhap Gender (Male, Female, Other): ')
        let user = new User(name, email, phone, gender);
        this.users.push(user)
    }

    showList() {
        console.table(this.users)
    }

    deleteUser() {
        let index = readlineSync.question('Nhap vi tri can xoa: ');
        this.users.splice(index, 1)
    }

}

export default UserManager
