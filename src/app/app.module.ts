import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSort, Sort} from '@angular/material/sort';
import {GenericListFilterModule} from 'generic-list-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GridModule,
  PagerModule,
  PageService,
  SortService,
  FilterService,
  
} from '@syncfusion/ej2-angular-grids';
import { ToolsComponent } from './tools/tools.component';
import { FlowchartComponent } from './flowchart/flowchart.component';

@NgModule({
  declarations: [AppComponent, ToolsComponent, FlowchartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    PagerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    GenericListFilterModule,
  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    PagerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    GenericListFilterModule,
  ],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}