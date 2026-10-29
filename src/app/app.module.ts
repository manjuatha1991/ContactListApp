import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListAppComponent } from './components/user-list-app/user-list-app.component';
import { UserListCardComponent } from './components/user-list-card/user-list-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';





@NgModule({
  declarations: [
    AppComponent,
    UserListAppComponent,
    UserListCardComponent,
    UserCardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
