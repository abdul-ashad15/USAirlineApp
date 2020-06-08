import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Passangerdetails } from './passenger-details/passangerdetails.component';
import { PassangerCreate } from './passenger-create/passengercreate.component';
import { PassengerService } from './passenger-details/passenger.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { navComponent } from './admin/nav.component';
import { LoginService } from './login/login.service';
import { navAdminComponent } from './admin/navadmin.component';
import { NavbarService } from './admin/navbar.service';
import { HomeComponent } from './home/home.component';
import { Ancillaryservices } from './ancillary-services/ancillaryservices.component';
import { AncillaryService } from './ancillary-services/ancillary.service';
import { Ancillarlistservices } from './ancillary-services/ancillary-listservices.component';
import { FilterPipe } from './passenger-details/filterPipe';

@NgModule({
  declarations: [
    AppComponent,Passangerdetails,PassangerCreate, AdminComponent, LoginComponent,routingComponents,
    navComponent,navAdminComponent,HomeComponent, Ancillaryservices,Ancillarlistservices,FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [PassengerService,LoginService,NavbarService,AncillaryService],
  //bootstrap: [AppComponent]
  bootstrap:[AppComponent]
})
export class AppModule { }
