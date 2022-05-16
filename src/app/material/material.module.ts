import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTableModule } from '@angular/material/table';

const MaterialComponents = [
  MatTableModule,
  MatAutocompleteModule
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
