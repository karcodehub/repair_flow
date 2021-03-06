import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
//import { MatSort } from '@angular/material/sort';
//import {Sort} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
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
  displayedColumns: string[] = ['position','sector', 'name', 'country', 'weight'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = [
    {
      position: 1,
      name: 'TX10 Bit',
      weight: 1.0079,
      symbol: 'H',
      country: 'DE',
      sector: 'BITS',
    },
    {
      position: 2,
      name: 'TX15 Bit',
      weight: 4.0026,
      symbol: 'He',
      country: 'DE',
      sector: 'BITS',
    },
    {
      position: 3,
      name: 'TX25 Bit',
      weight: 6.941,
      symbol: 'Li',
      country: 'NL',
      sector: 'BITS',
    },
    {
      position: 4,
      name: 'Combi Spanner 18mm',
      weight: 9.0122,
      symbol: 'Be',
      country: 'UK',
      sector: 'Spanner & Wrench',
    },
    {
      position: 5,
      name: 'Adjustable wrench',
      weight: 10.811,
      symbol: 'B',
      country: 'SE',
      sector: 'Spanner & Wrench',
    },
    {
      position: 6,
      name: 'Adjustable wrench',
      weight: 12.0107,
      symbol: 'C',
      country: 'FL',
      sector: 'BITS',
    },
    {
      position: 7,
      name: ' Scooter flashing cable - V3X/V4',
      weight: 14.0067,
      symbol: 'N',
      country: 'CH',
      sector: 'Special tool',
    },
    {
      position: 8,
      name: 'IoT Flashing Cable',
      weight: 15.9994,
      symbol: 'O',
      country: 'FR',
      sector: 'Special tool',
    },
    {
      position: 9,
      name: 'J-Link BASE - V3X/V4',
      weight: 18.9984,
      symbol: 'F',
      country: 'ES',
      sector: 'Special tool',
    },
    {
      position: 10,
      name: 'Bit Adapter 1/4" 8mm',
      weight: 20.1797,
      symbol: 'Ne',
      country: 'IT',
      sector: 'Spanner & Wrench',
    },

    {
      position: 11,
      name: 'Bit case',
      weight: 20.1797,
      symbol: 'Ne',
      country: 'USA',
      sector: 'BITS',
    },
  ];
  checkFilter: any;
  myData: any;
  //data: any;
  country: any;
  sector: any;

  filterList = {
    country: ['DE', 'ES', 'IT', 'UK','SE','DK','FL','NL','CH',],
    sector: ['BITS', 'Spanner & Wrench', 'Special tool', 'Screw Drivers & Allen Key'],
    //here you can add as many filters as you want.
  };
  data: any;

  constructor() {}

  ngOnInit(): void {
    // this.dataSource=ELEMENT_DATA
    //this.dataSource.paginator = this.paginator;
    this.myData = this.dataSource;
    //console.log('test', this.myData);
    console.log('-1', this.dataSource);
  }

  //@ViewChild(MatSort) sort: MatSort ;
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  doFilter(filterValue: any) {
    this.myData = this.dataSource;
    let tempDataSource = this.myData;
    let activeDrugList2 = tempDataSource.filter((item: any) =>
      item.name.toLowerCase().match(filterValue.target.value.toLowerCase())
    );
    this.myData = activeDrugList2;
  }

  //copyData = this.data;

  filterChange(appliedfilters: any) {
    //this.data = this.copyData;
    console.log(appliedfilters);
    this.myData = this.dataSource;
    let tempDataSource = this.myData;
    this.country = appliedfilters.appliedFilterValues.country;
    this.sector = appliedfilters.appliedFilterValues.sector;

    if (this.country) {
      var activeDrugList2 = tempDataSource.filter(
        (item: { country: any }) => item.country == this.country
      );
      this.myData = activeDrugList2;
    } else if (this.sector) {
      //this.data = this.data.filter(
        activeDrugList2 = tempDataSource.filter(
        (item: { sector: any }) => item.sector == this.sector
      );
      this.myData = activeDrugList2;
    } else {
      this.myData = this.dataSource;
    }

    /*let you have selected India as country and IT sector.
    
    you will get an object here i.e.

   { appliedFilterValues: {country: "India",sector: "IT"}
   isFilter: true
   }
    */

    //now do your awesome filtering work here.
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
