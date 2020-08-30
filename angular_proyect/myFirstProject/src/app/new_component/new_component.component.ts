import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
    selector: 'new_component',
    templateUrl: './new_component.component.html',
    styleUrls: ['./new_component.component.css'],
})
export class NewComponent{
    public condition: boolean = true;
    public firstAttribute: string;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.firstAttribute = "Test String";
        console.log("App Loaded");

        
    }

    ngOnInit(): void {
        this._route.params.subscribe((params:Params) => {
            console.log( params);
            if (params.name != undefined){
            alert("Hola " + params.name);
            }
        })
    }

    redirect(){
        this._router.navigate(['/home']);
    }
}