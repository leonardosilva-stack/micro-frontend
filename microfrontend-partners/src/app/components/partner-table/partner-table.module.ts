import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnerTableComponent } from './partner-table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms'; // Certifique-se de importar isto
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [PartnerTableComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    PaginatorModule,
    FormsModule // Certifique-se de importar isto
  ],
  exports: [PartnerTableComponent]
})
export class PartnerTableModule {}
