export class User{
    constructor(
        private _username: string,
        private _password: string,
    ){}

    
    public get username() : string {
        return this._username;
    }
    
    public get password() : string {
        return this._password;
    }
}