import { Component, OnInit } from '@angular/core';
import { UserSetting } from '../data/user-setting';

@Component({
  selector: 'pm-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  usersetting: UserSetting = {
    name: 'kadiri',
    email: 'kadirisunday@yahoo.com',
    subscriptionType: 'Weekly',
    exampleRadios: 'light',
    note: 'its God'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
