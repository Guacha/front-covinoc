import { Component, OnInit } from '@angular/core';
import { User } from '../../types/User.type';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css'],
})
export class AppContainerComponent implements OnInit {
  selectedUser?: User;

  constructor() {}

  ngOnInit(): void {}

  userWasSelected(user?: User) {
    this.selectedUser = user;
  }

  clearSelection() {
    window.location.reload();
    this.ngOnInit();
  }
}
