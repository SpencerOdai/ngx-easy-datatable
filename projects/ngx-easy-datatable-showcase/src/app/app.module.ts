import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEasyDatatableModule } from 'projects/ngx-easy-datatable/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgxEasyDatatableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
