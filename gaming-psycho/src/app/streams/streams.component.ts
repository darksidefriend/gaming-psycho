import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  streamIsOpen : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showStream(){
    this.streamIsOpen = true;
    document.body.style.overflowY = 'hidden';
  }

  hideStream(){
    this.streamIsOpen = false;
    document.body.style.overflowY = 'visible';
  }   

}
