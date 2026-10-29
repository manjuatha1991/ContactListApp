import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { contact } from 'src/app/models/contact';
import { ContactserviceService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.css']
})
export class UserListCardComponent implements OnInit {

  @Output() sendContact = new EventEmitter();

  public contacts:contact[] =[] as contact[];
  
    public errorMessage:any='';
  

  constructor(private contactService:ContactserviceService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data)=>{
    this.contacts=data;
  },
  (error)=>{
    this.errorMessage=error;
  });
  }

  public emitcontact(contact:contact):void{
    console.log(contact);
    this.sendContact.emit(contact);
  }

}
