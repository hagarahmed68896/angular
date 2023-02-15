import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3-form';
  users: { name: string; age: string }[] = [];

  handleRegister(user: { name: string; age: string }) {
    this.users.push(user);
  }
}
