import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.scss'],
  styles: [`
    :host >>> .alert-custom {
      color: #F7F6F2;
      background-color: #FF2442;
      text-align: right;
    }
  `]
})
export class AlertLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
