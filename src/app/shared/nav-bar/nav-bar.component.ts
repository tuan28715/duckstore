import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
    console.log(this.username);
  }

  public username = localStorage.getItem('username')

  logout(){
    localStorage.removeItem('username');
    this.Router.navigate(['']);
    window.location.reload();
  }

}
