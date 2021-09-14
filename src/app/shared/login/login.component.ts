import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_API_URL } from '../../config/config'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal, private HttpClient:HttpClient, private Router:Router) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  flag:any;
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  open(content) {
    this.modalService.open(content);
  }
  user:any;
  async login(){
    await this.HttpClient.post(USER_API_URL + 'login', this.userForm.value).subscribe((data)=>{
      this.user = data;
      localStorage.setItem('username', this.user.username);
      this.Router.navigate(['']);
      window.location.reload();
    },(err)=>{
      this.flag = true;
    })
  }
}

