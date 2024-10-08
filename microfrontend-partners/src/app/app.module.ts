import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerTableModule } from './components/partner-table/partner-table.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartnerTableModule,
    FormsModule,
    TableModule,
    PartnerTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
