import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private httpClient:HttpClient) { }

  public getContacts(): Observable<contact[]> {
    let dataUrl='https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json';
    return this.httpClient.get<contact[]>(dataUrl).pipe(
      catchError(this.handelError)
    );
  }

  public handelError(error:HttpErrorResponse){
        let errorMeassage:string='';
        if (error.status === 0) {
          // A client-side or network error occurred.
          errorMeassage='Client-side error: ${error.error}';
        } else {
          // The backend returned an unsuccessful response code.
          console.error(`Backend returned code ${error.status}, body was:`, error.error);
          errorMeassage=`Backend returned code ${error.status}, body was:${error.error}`;
        }
        
        // Return an observable with a user-facing error message.
        return throwError(error.error);
      }
}
