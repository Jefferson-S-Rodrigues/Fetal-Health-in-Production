import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InputNumberComponent } from './shared/components/fields/input-number/input-number.component';
import { ResultDialogComponent } from './shared/components/dialogs/result-dialog/result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamComponent,
    InputNumberComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
