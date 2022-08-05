import { Component, OnInit } from '@angular/core';
import { User } from '../../types/User.type';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  user?: User;

  constructor() {}

  ngOnInit(): void {}
}
