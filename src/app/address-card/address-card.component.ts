import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  @Input('user') user: User;

  constructor() { }

  ngOnInit() {
    this.hasPhones()
  }

  hasPhones() {
    return this.user.phones.length > 0 ? true : false;
  }
}
