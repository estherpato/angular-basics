import { Component } from '@angular/core';
import { User } from './address-card/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: string = 'Initial value';
  
  constructor() {
    this.user = new User;
    this.user.name = 'Esther Pato',
    this.user.job = 'Front end Developer',
    this.user.address = '123 Street City State',
    this.user.phones = ['+34 687 086 711']
  }
}
