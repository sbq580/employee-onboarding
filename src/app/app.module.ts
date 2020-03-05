import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorMessageModule } from './shared/modules/error-message/error-message.module';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
