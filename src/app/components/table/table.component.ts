import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../types/User.type';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  skeletonRow: number[] = Array(5).fill(0);
  @Output() selectedUser = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loading = false;
    });
  }
  emitUserSelected(user: User) {
    this.selectedUser.emit(user);
  }
}
