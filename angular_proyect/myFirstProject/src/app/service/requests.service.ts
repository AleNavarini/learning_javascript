import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RequestsService{
    public url: string;
    constructor(
        public _http:HttpClient
    )
    {
        this.url = "https://reqres.in/";
    }

    getUser(){
        return this._http.get(this.url + '/api/users?page=2');
    }
    /*When you import this method to other component you need to use
    getUser().subscribe(
        result => {
            console.log(result);
        },
        error => {
            console.log(<any>error);
        }
    );
    */   
}