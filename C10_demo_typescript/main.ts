import UserManager from "./src/UserManager";
let readlineSync = require('readline-sync');

let userManager = new UserManager()

let exits: boolean = false;

const menu = () =>{

    while(!exits) {
        console.log('1: Danh sach nguoi dung')
        console.log('2: Them nguoi dung')
        console.log('3: Xoa nguoi dung')
        console.log('4: Thoat')

        let number = readlineSync.question('Nhap lua chon tinh nang: ');
        switch (number) {
            case "1":
                userManager.showList();
                break;
            case "2":
                userManager.addUser();
                break;
            case "3":
                userManager.deleteUser();
                break;
            default:
                exits = true;
        }
    }
}
menu();



