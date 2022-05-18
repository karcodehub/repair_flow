import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from  '@angular/material/form-field';

const MaterialComponents = [
  MatTableModule,
  MatAutocompleteModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
