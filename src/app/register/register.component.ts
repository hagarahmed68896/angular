import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  age = '';

  @Output() onRegister = new EventEmitter<{ name: string; age: string }>();

  submit() {
    this.onRegister.emit({ name: this.name, age: this.age });
    this.name = '';
    this.age = '';
  }
}

