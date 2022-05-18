import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
//import { MatSort } from '@angular/material/sort';
//import {Sort} from '@angular/material/sort';
//import { MatPaginatorModule } from '@angular/material/paginator';
//import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
//import { FilterSettingsModel } from '@syncfusion/ej2-grids';
//import { MatFormFieldModule } from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-tools',
  /* template: `<ejs-grid [dataSource]="data" [allowSorting]="true" [allowFiltering]="true"
  [allowPaging]="true" [filterSettings]='filterOptions' [pageSettings]='pageSettings'>
    <e-columns>
      <e-column field='ProdID' headerText='Order ID' textAlign='left'  ></e-column>
      <e-column field='ProductName' headerText='Product Name'></e-column>
      <e-column field='Price' headerText='Price'></e-column>
      <e-column field='ProdID' headerText='Order ID'></e-column>
    </e-columns>
  </ejs-grid>`,*/
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  checkFilter:any;
  constructor() {}

  ngOnInit(): void {
   // this.dataSource=ELEMENT_DATA
    //this.dataSource.paginator = this.paginator;
  }

   //@ViewChild(MatSort) sort: MatSort ;
   //@ViewChild(MatPaginator) paginator: MatPaginator;

  doFilter(filterValue: any) {
    //console.log(filterValue.target.value);
    //this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    let activeDrugList2 = this.element.filter(
      (item: any) => item.productName.toLowerCase().match(value.toLowerCase())
      // console.log(item.productName, value);
    );


  }

  /* title= 'my-grid-app';
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
  */
}
