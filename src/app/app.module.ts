import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ToolsComponent } from './tools/tools.component';
import { FlowchartComponent } from './flowchart/flowchart.component';

@NgModule({
  declarations: [AppComponent, ToolsComponent, FlowchartComponent],
  imports: [BrowserModule, AppRoutingModule, GridModule, PagerModule],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
