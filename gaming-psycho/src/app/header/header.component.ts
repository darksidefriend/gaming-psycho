import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerIsHidden : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideHeader(){
    this.headerIsHidden = true;
  }

}
