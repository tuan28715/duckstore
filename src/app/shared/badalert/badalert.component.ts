import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badalert',
  templateUrl: './badalert.component.html',
  styleUrls: ['./badalert.component.scss'],
  styles: [`
    :host >>> .alert-custom {
      color: #F7F6F2;
      background-color: #FF2442;
      text-align: right;
    }
  `]
})
export class BadalertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
