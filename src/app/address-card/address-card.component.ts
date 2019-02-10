import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  @Input('user') user: User;
  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  handleClick() {
    this.isCollapsed = !this.isCollapsed
  }
}
