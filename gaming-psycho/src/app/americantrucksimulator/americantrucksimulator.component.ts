import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-americantrucksimulator',
  templateUrl: './americantrucksimulator.component.html',
  styleUrls: ['./americantrucksimulator.component.css']
})
export class AmericantrucksimulatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSteam(){
    window.location.href = 'https://store.steampowered.com/app/270880/American_Truck_Simulator/';
  }

}
