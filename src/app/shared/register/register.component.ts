import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { USER_API_URL } from '../../config/config'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class RegisterComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal, private HttpClient:HttpClient) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  flag : any;
  open(content) {
    this.modalService.open(content);
  }
  async register(){
    await this.HttpClient.post(USER_API_URL + 'register', {}).subscribe((data)=>{
      
    })
  }
}
