import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-tools',
  template: `<ejs-grid [dataSource]="data" [allowSorting]="true" [allowFiltering]="true"
  [allowPaging]="true" [filterSettings]='filterOptions' [pageSettings]='pageSettings'>
    <e-columns>
      <e-column field='ProdID' headerText='Order ID' textAlign='left'  ></e-column>
      <e-column field='ProductName' headerText='Product Name'></e-column>
      <e-column field='Price' headerText='Price'></e-column>
      <e-column field='ProdID' headerText='Order ID'></e-column>
    </e-columns>
  </ejs-grid>`,
 // templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title= 'my-grid-app';
  public filterOptions : FilterSettingsModel ={
    ignoreAccent: true,
    type: "Excel"
  }
  public pageSettings: PageSettingsModel = { pageSize: 5};
  public data: object[] = [
    {
      ProdID: 1,
      ProductName: "AAA",
      Price: "123",
      Country: "CHN",
      Manufacturer: "Wurth",
      Discount: "5%"
    },

    {
      ProdID: 2,
      ProductName: "BBB",
      Price: "234",
      Country: "CHN",
      Manufacturer: "Wurth",
      Discount: "6%"
    },

    {
      ProdID: 3,
      ProductName: "CCC",
      Price: "345",
      Country: "CHN",
      Manufacturer: "Wurth",
      Discount: "7%"
    },

    {
      ProdID: 4,
      ProductName: "DDD",
      Price: "456",
      Country: "CHN",
      Manufacturer: "Wurth",
      Discount: "8%"
    },

    {
      ProdID: 5,
      ProductName: "EEE",
      Price: "567",
      Country: "CHN",
      Manufacturer: "Wurth",
      Discount: "9%"
    }
  ]
}
