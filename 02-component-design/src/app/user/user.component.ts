import { Component, OnInit, Input } from '@angular/core';
import { User } from '../project-dashboard/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

  get avatar() {
    return this.user
      ? `${this.user.firstName.charAt(0).toUpperCase()}${this.user.lastName.charAt(0).toUpperCase()}`
      : '';
  }

}
