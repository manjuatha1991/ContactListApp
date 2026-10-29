import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/models/contact';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() contact: contact = {} as contact;

  constructor() { }

  ngOnInit(): void {

  }

  public isNotEmpty():boolean{
    return Object.keys(this.contact).length>0;
  }

}
