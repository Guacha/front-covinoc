import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../types/User.type';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  @Input('selectedUser') user?: User;
  @Output('formSubmitted') formSubmitted = new EventEmitter<any>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    this.userService.updateUser(data, this.user?.id);
    this.formSubmitted.emit();
  }
}
