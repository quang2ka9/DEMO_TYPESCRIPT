class User <T>{
    private readonly name: string;
    private readonly email: string;
    private readonly phone: T;
    public readonly gender: string;

    constructor(name: string,
                email: string,
                phone: T,
                gender: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender
    }

    getEmail(): string {
        return this.email;
    }

    getPhone(): T {
        return this.phone;
    }

    getName(): string {
        return this.name;
    }

    getGender(): string {
        return this.gender;
    }

}

export default User;
