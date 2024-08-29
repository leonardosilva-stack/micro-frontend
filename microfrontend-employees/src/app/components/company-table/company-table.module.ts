import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyTableComponent } from './company-table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [CompanyTableComponent],
  imports: [
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    FormsModule,
  ],
  exports: [CompanyTableComponent]
})
export class CompanyTableModule {}
