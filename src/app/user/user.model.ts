import { EmailValidator } from "@angular/forms";

export class User {
    public userName: string;
    public userEmail: string;
    public userPhoneNumber: string;
    public userImgPath: string;

    constructor(name: string, email: string, phoneNumer: string, imagPath: string){
        this.userName = name;
        this.userEmail = email;
        this.userPhoneNumber = phoneNumer;
        this.userImgPath = imagPath;
    }
}