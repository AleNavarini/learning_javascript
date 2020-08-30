import { Component, DoCheck } from '@angular/core';
import { User } from './models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  public condition:boolean = false;
  public current_username: string;
  public current_password: string;
  public users: User[];
  public color:string;
  title = 'myFirstProject';

  constructor(){
      this.color = "red";
      this.users = [ new User("AleNavarini", "Sympathetic") ];
  }
  
  addUser(){
        let usr = new User(this.current_username, this.current_password);
        this.users.push(usr);


  }
  ngDoCheck(): void {
      
  }
}
