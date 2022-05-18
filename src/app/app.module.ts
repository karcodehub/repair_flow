import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ToolsComponent } from './tools/tools.component';
import { FlowchartComponent } from './flowchart/flowchart.component';

@NgModule({
  declarations: [AppComponent, ToolsComponent, FlowchartComponent],
  imports: [BrowserModule, AppRoutingModule, GridModule, PagerModule, MatPaginatorModule,MatSort,MatSortModule ],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
