import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileName = 'Daniil Savelev';
  profileInfo = 'Самый натуральный ГЕЙмер';
  profileTagname = '4ssh0le'

  constructor() { }

  ngOnInit(): void {
  }

}
