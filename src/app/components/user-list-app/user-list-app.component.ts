import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/models/contact';


@Component({
  selector: 'app-user-list-app',
  templateUrl: './user-list-app.component.html',
  styleUrls: ['./user-list-app.component.css']
})
export class UserListAppComponent implements OnInit {

  public selectedContact:contact ={} as contact;
  
  constructor() { }

  ngOnInit(): void {
  
    }

}
