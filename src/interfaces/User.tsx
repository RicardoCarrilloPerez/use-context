import { IUser } from "./IUser";

export class User implements IUser {
    id:number;
    firstname:string;
    lastname:string;
        constructor(id:number,firstname:string,lastname:string) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
        }
}