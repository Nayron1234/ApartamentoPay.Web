import { Component } from '@angular/core';

@Component({
  selector: 'app-residents-component',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent {
  public currentCount = 0;

  public incrementResidents() {
    this.currentCount++;
  }
}