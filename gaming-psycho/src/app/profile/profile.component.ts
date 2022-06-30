import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileName = 'Daniil Savelev';
  profileInfo = `Xbox enjoyer
  #personaбольшенеэкcклюзив`;
  profileTagname = 'sk8er_boi'

  constructor() { }

  ngOnInit(): void {
  }

}
