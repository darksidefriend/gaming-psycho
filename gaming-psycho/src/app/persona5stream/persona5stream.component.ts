import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'persona5stream',
  templateUrl: './persona5stream.component.html',
  styleUrls: ['./persona5stream.component.css']
})
export class Persona5streamComponent implements OnInit {

  @Output() closeActiveStream = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  closeStream(){
    this.closeActiveStream.emit();
  }

}
