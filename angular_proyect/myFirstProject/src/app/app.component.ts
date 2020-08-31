import { Component, DoCheck } from '@angular/core';
import { User } from './models/user';
import { FormsModule } from '@angular/forms';
//import { UserService } from "src/app/service/user.service"; This is the way you use to import services
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[/*User Service*/], // In here will go all the services

})
export class AppComponent implements DoCheck {
  public condition:boolean = false;
  public current_username: string;
  public current_password: string;
  public users: User[];
  public color:string;
  title = 'myFirstProject';

  constructor(
    //private _userService: UserService
  ){
      this.color = "red";
      this.users = [ new User("AleNavarini", "Sympathetic") ];
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.users = this._userService.getUsers();
  }
  addUser(){
        let usr = new User(this.current_username, this.current_password);
        this.users.push(usr);


  }
  ngDoCheck(): void {
      
  }
}
