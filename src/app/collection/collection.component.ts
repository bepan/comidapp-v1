import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionComponent implements OnInit {

  numbers: any;

  cars: Car[] = [
    { vin: 123, year: 'Orden 5 Tacos', brand: 'ford', color: 'blue' },
    { vin: 123, year: '$2018.00', brand: 'ford', color: 'blue' },
    { vin: 123, year: '$2018.00', brand: 'ford', color: 'blue' },
    { vin: 123, year: 'Orden 5 Tacos', brand: 'ford', color: 'blue' },
    { vin: 123, year: 'Orden 5 Tacos', brand: 'ford', color: 'blue' }
  ];

  constructor() {}

  ngOnInit() {
    this.numbers = new Array(300);
  }

}
