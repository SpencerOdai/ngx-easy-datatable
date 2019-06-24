import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatPipe } from 'projects/ngx-easy-datatable/src/lib/helpers/pipes/format/format.pipe';
import { OrderByPipe } from 'projects/ngx-easy-datatable/src/lib/helpers/pipes/order-by/order-by.pipe';
import { NgxEasyDatatableService } from 'projects/ngx-easy-datatable/src/lib/services/ngx-easy-datatable.service';
import { NgxEasyDatatableComponent } from './components/ngx-easy-datatable.component';

@NgModule({
  declarations: [NgxEasyDatatableComponent, FormatPipe, OrderByPipe],
  imports: [CommonModule],
  exports: [NgxEasyDatatableComponent, FormatPipe, OrderByPipe],
  providers: [NgxEasyDatatableService]
})
export class NgxEasyDatatableModule {}
